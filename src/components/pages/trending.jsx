import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
export default function Trending() {
  return (
    <>
      <div className="flex">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  m-auto mt-6">
          Trending this Week
        </h2>
      </div>
      <main className="flex flex-1 flex-col gap-8 p-4 sm:px-6 sm:py-0 md:gap-12 md:p-10">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Acme Creator</CardTitle>
                <CardDescription>@acme_creator</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-full"
                  >
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Follow</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <img
                src=""
                width={400}
                height={225}
                alt="Content"
                className="object-cover aspect-video rounded-md"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">25</span> Likes
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Isabella Nguyen</CardTitle>
                <CardDescription>@isabella_n</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-full"
                  >
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Follow</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Content"
                className="object-cover aspect-video rounded-md"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">50</span> Likes
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Sofia Davis</CardTitle>
                <CardDescription>@sofia_d</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-full"
                  >
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Follow</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Content"
                className="object-cover aspect-video rounded-md"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">75</span> Likes
              </div>
            </CardFooter>
          </Card>
        </section>
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JW</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Jules Winnfield</CardTitle>
                <CardDescription>@jules_w</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-full"
                  >
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Follow</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Content"
                className="object-cover aspect-video rounded-md"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">100</span> Likes
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Olivia Martin</CardTitle>
                <CardDescription>@olivia_m</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-full"
                  >
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Follow</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Content"
                className="object-cover aspect-video rounded-md"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">125</span> Likes
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>John Doe</CardTitle>
                <CardDescription>@john_d</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-full"
                  >
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Follow</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <img
                src="/placeholder.svg"
                width={400}
                height={225}
                alt="Content"
                className="object-cover aspect-video rounded-"
              />
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
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

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
