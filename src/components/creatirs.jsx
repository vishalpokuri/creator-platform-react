import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function Creatirs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <BrushIcon className="h-6 w-6 text-primary" />
            <span>Creator Platform</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Creators
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Reviews
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Analytics
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Rewards
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="container py-8 px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Content</h2>
            <Link
              href="#"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Featured Content"
                  width={400}
                  height={225}
                  className="aspect-video rounded-md object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">Painting Masterclass</h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn the fundamentals of painting from a professional
                    artist.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Avatar className="h-8 w-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">
                        Creator
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Featured Content"
                  width={400}
                  height={225}
                  className="aspect-video rounded-md object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">Photography Workshop</h3>
                  <p className="mt-2 text-muted-foreground">
                    Capture stunning images with our expert photography tips.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Avatar className="h-8 w-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Anderson</div>
                      <div className="text-xs text-muted-foreground">
                        Creator
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Featured Content"
                  width={400}
                  height={225}
                  className="aspect-video rounded-md object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">
                    Graphic Design Essentials
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Master the fundamentals of graphic design with this
                    comprehensive course.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Avatar className="h-8 w-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Michael Johnson</div>
                      <div className="text-xs text-muted-foreground">
                        Creator
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Top Creators</h2>
            <Link
              href="#"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">Creator</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <HeartIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">1.2K</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    John is a talented artist who specializes in digital
                    painting. He has a growing following on the platform and is
                    known for his unique style.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Anderson</div>
                    <div className="text-xs text-muted-foreground">Creator</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <HeartIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">950</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    Sarah is a passionate photographer who captures stunning
                    landscapes and portraits. Her work has been featured in
                    several online galleries.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-xs text-muted-foreground">Creator</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <HeartIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">800</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    Michael is a skilled graphic designer who has created
                    branding and marketing materials for several successful
                    startups. His work is highly sought after.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Top Reviewers</h2>
            <Link
              href="#"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              prefetch={false}
            >
              View All
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">
                      Reviewer
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <StarIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    John is a passionate art enthusiast who provides thoughtful
                    and insightful feedback on the platform. His reviews are
                    highly valued by the community.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Anderson</div>
                    <div className="text-xs text-muted-foreground">
                      Reviewer
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <StarIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">4.6</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    Sarah is a discerning reviewer who provides valuable
                    feedback to creators. Her reviews are known for their
                    objectivity and attention to detail.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-xs text-muted-foreground">
                      Reviewer
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <StarIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">4.4</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    Michael is a seasoned creative professional who provides
                    valuable insights and feedback to creators. His reviews are
                    highly respected in the community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted/40 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-xs text-muted-foreground">
            &copy; 2024 Creator Platform. All rights reserved.
          </div>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:underline"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link href="#" prefetch={false} />
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
