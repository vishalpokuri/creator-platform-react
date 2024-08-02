import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { useOkto } from "okto-sdk-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ProfileContext } from "../../App";
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
        setWallets(walletsData);
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
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="w-20 h-20 border">
                    <AvatarImage src={profile.picture} />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <CardTitle>{profile.name}</CardTitle>
                    <CardDescription>@vishal_pok</CardDescription>
                  </div>
                </CardHeader>
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
                <CardHeader>
                  <CardTitle className="text-sm">My Content</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <span className="text-3xl font-semibold">25</span>
                </CardContent>
              </Card>
              <Card className="flex items-center">
                <CardHeader>
                  <CardTitle className="text-sm">Total Reviews</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <span className="text-3xl font-semibold">50</span>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-around">
                <CardHeader>
                  <CardTitle className="text-sm">
                    Total Content Shared
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center  ">
                  <span className="text-xl font-semibold ">100</span>
                </CardContent>
              </Card>
              <Card className="flex items-center justify-around">
                <CardHeader>
                  <CardTitle className="text-sm">Total Viewers</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <span className="text-xl font-semibold">10,234</span>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>My content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Creative Masterpiece</div>
                        <div className="text-sm text-muted-foreground">
                          4.8 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Inspiring Landscapes</div>
                        <div className="text-sm text-muted-foreground">
                          4.6 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Stunning Visuals</div>
                        <div className="text-sm text-muted-foreground">
                          4.5 stars
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Famous Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Creative Masterpiece</div>
                        <div className="text-sm text-muted-foreground">
                          4.8 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Inspiring Landscapes</div>
                        <div className="text-sm text-muted-foreground">
                          4.6 stars
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        width={80}
                        height={45}
                        alt="Content"
                        className="object-cover aspect-video rounded-md"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Stunning Visuals</div>
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
function PopulateWallets(wallets) {
  const array = wallets.wallets;
  const arrays = Object.values(array);
  const finalarray = arrays[0];
  console.log(finalarray);

  return finalarray.map((object) => (
    <div key={object.network_name}>
      <div className="font-medium">{object.network_name} </div>
      <div className="text-sm text-muted-foreground">{object.address}</div>
    </div>
  ));
}
