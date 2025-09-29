import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Mock data types
interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  type: 'text' | 'image' | 'video';
  mediaUrl?: string;
  timestamp: string;
  likes: number;
  comments: number;
  liked: boolean;
}

// Mock data
const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Anna Hansen',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    content: 'Dagens aktivitet var fantastisk! Barna elsket å male og tegne sammen.',
    type: 'text',
    timestamp: '2 timer siden',
    likes: 12,
    comments: 3,
    liked: false
  },
  {
    id: '2',
    author: {
      name: 'Erik Larsen',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    content: 'Se på denne fine tegningen!',
    type: 'image',
    mediaUrl: 'https://picsum.photos/400/300?random=1',
    timestamp: '4 timer siden',
    likes: 8,
    comments: 1,
    liked: true
  },
  {
    id: '3',
    author: {
      name: 'Maria Olsen',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    content: 'Barna danser til musikk i dag!',
    type: 'video',
    mediaUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    timestamp: '6 timer siden',
    likes: 15,
    comments: 5,
    liked: false
  },
  {
    id: '4',
    author: {
      name: 'Lars Andersen',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    content: 'Utflukt til parken i dag. Været var perfekt!',
    type: 'image',
    mediaUrl: 'https://picsum.photos/400/300?random=2',
    timestamp: '1 dag siden',
    likes: 20,
    comments: 7,
    liked: true
  },
  {
    id: '5',
    author: {
      name: 'Sofia Johansen',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    content: 'Husk at bringe regntøy i morgen!',
    type: 'text',
    timestamp: '2 dager siden',
    likes: 5,
    comments: 2,
    liked: false
  }
];

const Feed: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'text' | 'image' | 'video'>('all');
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);

  // Filter posts based on active filter
  const filteredPosts = posts.filter(post => 
    activeFilter === 'all' || post.type === activeFilter
  );

  // Handle like toggle
  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  // Handle new post creation
  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost: Post = {
        id: Date.now().toString(),
        author: {
          name: 'Du',
          avatar: 'https://i.pravatar.cc/150?img=6'
        },
        content: newPostContent,
        type: 'text',
        timestamp: 'Nå',
        likes: 0,
        comments: 0,
        liked: false
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
      setShowCreatePost(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with filter buttons */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex gap-2 mb-4">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className="flex-1"
            >
              Alle
            </Button>
            <Button 
              variant={activeFilter === 'text' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('text')}
              className="flex-1"
            >
              Innlegg
            </Button>
            <Button 
              variant={activeFilter === 'image' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('image')}
              className="flex-1"
            >
              Bilder
            </Button>
            <Button 
              variant={activeFilter === 'video' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('video')}
              className="flex-1"
            >
              Videoer
            </Button>
          </div>
        </div>
      </div>

      {/* Create Post Section */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-3 mb-3">
            <img 
              src="https://i.pravatar.cc/150?img=6" 
              alt="Your avatar" 
              className="w-10 h-10 rounded-full"
            />
            <button 
              onClick={() => setShowCreatePost(!showCreatePost)}
              className="flex-1 text-left text-gray-500 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
            >
              Hva skjer i barnehagen?
            </button>
          </div>
          
          {showCreatePost && (
            <div className="border-t border-gray-200 pt-4">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Skriv et innlegg..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    📷 Bilde
                  </Button>
                  <Button variant="outline" size="sm">
                    🎥 Video
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCreatePost(false)}
                  >
                    Avbryt
                  </Button>
                  <Button 
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim()}
                  >
                    Publiser
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="max-w-2xl mx-auto px-4 pb-20">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
            {/* Post Header */}
            <div className="flex items-center space-x-3 p-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-gray-900 mb-3">{post.content}</p>
              
              {/* Media Content */}
              {post.type === 'image' && post.mediaUrl && (
                <img 
                  src={post.mediaUrl} 
                  alt="Post image"
                  className="w-full rounded-lg mb-3"
                />
              )}
              
              {post.type === 'video' && post.mediaUrl && (
                <video 
                  src={post.mediaUrl} 
                  controls
                  className="w-full rounded-lg mb-3"
                >
                  Din nettleser støtter ikke video-elementet.
                </video>
              )}
            </div>

            {/* Post Actions */}
            <div className="border-t border-gray-200 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 ${
                      post.liked ? 'text-blue-600' : 'text-gray-500'
                    } hover:text-blue-600 transition-colors`}
                  >
                    <span className="text-lg">{post.liked ? '❤️' : '🤍'}</span>
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <span className="text-lg">💬</span>
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                </div>
                
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  <span className="text-lg">📤</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Ingen innlegg funnet for denne kategorien.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feed;
