import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { Link } from "react-router-dom";
import photo1 from "../images/photo1.webp";
import photo2 from "../images/photo2.avif";
import photo3 from "../images/photo4.avif";
import { useOkto } from "okto-sdk-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfileContext } from "../../App";
import CreateModal from "../smallBlocks/modal_dialog";
export default function Dashboard() {
  const { profile } = useContext(ProfileContext);
  const { getWallets } = useOkto();
  const [wallets, setWallets] = useState({});

  const fetchWallets = async () => {
    try {
      const walletsData = await getWallets();
      console.log(walletsData);
      if (typeof walletsData === "object" && walletsData !== null) {
        setWallets(walletsData);
        console.log(wallets);
      } else {
        console.error(
          "Expected walletsData to be an object, got:",
          walletsData
        );
      }
    } catch (error) {
      console.log(`Failed to fetch wallets: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  return (
    <>
      <main className="flex flex-1 flex-col gap-8 p-4 sm:px-6 sm:py-0 md:gap-12 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="grid gap-6">
              <Card>
                <div className="justify-between flex flex-row">
                  <CardHeader className="flex flex-row items-center gap-4 ">
                    <Avatar className="w-20 h-20 border">
                      <AvatarImage src={profile.picture} />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <CardTitle>{profile.name}</CardTitle>
                      <CardDescription>@vishal_pok</CardDescription>
                    </div>
                  </CardHeader>
                  <div className="grid gap-1">
                    <CardHeader>
                      <CardTitle>🖌️🖼️ Creator</CardTitle>
                    </CardHeader>
                    <CreateModal />
                  </div>
                </div>
                <CardContent>
                  <div className="grid row-start-1 col-start-1 row-end col-end-4 gap-4">
                    <div className="grid grid-cols-1 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Wallets</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4">
                            <PopulateWallets wallets={wallets} />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-4">
              <Card className="flex items-center">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">My Content</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center p-3">
                  <span className="text-3xl font-semibold">25</span>
                </CardContent>
              </Card>
              <Card className="flex items-center">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Total Reviews</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center p-3">
                  <span className="text-3xl font-semibold">50</span>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-around">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">
                    Total Content Shared
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center p-3 ">
                  <span className="text-xl font-semibold ">100</span>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-around">
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Total Viewers</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center p-3">
                  <span className="text-xl font-semibold">10,234</span>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <CardHeader className="flex flex-row justify-between ">
                  <CardTitle>My content</CardTitle>
                  <Link
                    href="#"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    prefetch={false}
                  >
                    View All
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={photo1}
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">
                          Why did the chicken cross the road? To buy Solana
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4.8 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={photo2}
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">
                          I'm unemployed for over 2 years as a SDE
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4.6 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={photo3}
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">
                          SearchGPT, we saw this one coming.......
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4.5 stars
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="m-2"></div>
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <CardHeader className="flex flex-row justify-between ">
                  <CardTitle>Famous Contents</CardTitle>
                  <Link
                    href="#"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    prefetch={false}
                  >
                    View All
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={photo1}
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">
                          Why did the chicken cross the road? To buy Solana
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4.8 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={photo2}
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">
                          I'm unemployed for over 2 years as a SDE
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4.6 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={photo3}
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">
                          SearchGPT, we saw this one coming.......
                        </div>
                        <div className="text-sm text-muted-foreground">
                          4.5 stars
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
function PopulateWallets({ wallets }) {
  if (!wallets || Object.keys(wallets).length === 0) {
    return <div>No wallets found.</div>;
  }

  const walletsArray = Object.values(wallets)[0];

  return walletsArray.map((wallet) => (
    <div key={wallet.address}>
      <div className="font-medium">{wallet.network_name}</div>
      <div className="text-sm text-muted-foreground">{wallet.address}</div>
    </div>
  ));
}
