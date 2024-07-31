import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleSignupClickcreator = () => {
    navigate("/creator-loginpage");
  };
  const handleSignupClickReader = () => {
    navigate("/reader-loginpage");
  };

  return (
    <>
      <section className="bg-muted py-12 md:py-24">
        <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 ml-5">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ">
              Discover and Reward Exceptional Content
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Our platform empowers content creators to share their work and
              connect with engaged reviewers who can provide valuable feedback
              and incentives.
            </p>
            <div className="flex gap-4">
              <Button onClick={handleSignupClickcreator}>
                Join as a Creator
              </Button>
              <Button onClick={handleSignupClickReader} variant="outline">
                Become a Reviewer
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Hero"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-16">
          <div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Creators"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4 mr-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empower Content Creators
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Our platform provides a seamless experience for content creators
              to showcase their work, connect with engaged reviewers, and
              receive valuable feedback and incentives.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>10K+</CardTitle>
                  <CardDescription>Creators</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>$1M+</CardTitle>
                  <CardDescription>Rewards Earned</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>4.9/5</CardTitle>
                  <CardDescription>Avg. Rating</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>100+</CardTitle>
                  <CardDescription>Categories</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-24">
        <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 ml-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Engage and Reward Reviewers
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Our platform empowers reviewers to discover exceptional content,
              provide valuable feedback, and earn incentives for their
              contributions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>50K+</CardTitle>
                  <CardDescription>Reviewers</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>$500K+</CardTitle>
                  <CardDescription>Rewards Distributed</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>4.7/5</CardTitle>
                  <CardDescription>Avg. Satisfaction</CardDescription>
                </CardHeader>
              </Card>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>10+</CardTitle>
                  <CardDescription>Reward Types</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Reviewers"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join Our Community
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Whether you're a content creator or a passionate reviewer, we're
              excited to have you join our vibrant community and unlock new
              opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleSignupClickcreator}>
                Join as a Creator
              </Button>
              <Button onClick={handleSignupClickReader} variant="outline">
                Become a Reviewer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
