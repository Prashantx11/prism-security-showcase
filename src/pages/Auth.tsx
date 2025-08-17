import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Auth = () => {
  const { user, signIn, signUp, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  if (user && !loading) {
    return <Navigate to="/" replace />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signIn(email, password);
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await signUp(email, password);
    setIsLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-cyber-green text-lg font-fira">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-cyber-navy/30 border-cyber-green/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-fira text-cyber-green">
                  Welcome
                </CardTitle>
                <CardDescription className="text-gray-300 font-space">
                  Sign in to access the admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-cyber-navy/50">
                    <TabsTrigger 
                      value="signin" 
                      className="text-gray-300 data-[state=active]:text-cyber-green data-[state=active]:bg-cyber-green/20"
                    >
                      Sign In
                    </TabsTrigger>
                    <TabsTrigger 
                      value="signup"
                      className="text-gray-300 data-[state=active]:text-cyber-green data-[state=active]:bg-cyber-green/20"
                    >
                      Sign Up
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300 font-space">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-cyber-navy/50 border-cyber-green/30 text-white placeholder-gray-400"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-300 font-space">
                          Password
                        </Label>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-cyber-navy/50 border-cyber-green/30 text-white placeholder-gray-400"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-cyber-green text-black hover:bg-cyber-green/80 font-fira"
                      >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-gray-300 font-space">
                          Email
                        </Label>
                        <Input
                          id="signup-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-cyber-navy/50 border-cyber-green/30 text-white placeholder-gray-400"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-gray-300 font-space">
                          Password
                        </Label>
                        <Input
                          id="signup-password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="bg-cyber-navy/50 border-cyber-green/30 text-white placeholder-gray-400"
                          placeholder="Create a password"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-cyber-green text-black hover:bg-cyber-green/80 font-fira"
                      >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Auth;