import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { NextResponse } from "next/server"

// http://localhost:3000/api/users
export const GET = async () => {

  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, { status: 500 });
  }
  //return new NextResponse("This is a api with next");
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(JSON.stringify({ message: "User is created", user: newUser }),
      { status: 200 }
    );

  } catch (error: any) {
    return new NextResponse("Error in creating user" + error.message, { status: 500 });

  }
}