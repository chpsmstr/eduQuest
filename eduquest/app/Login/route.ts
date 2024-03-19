
import prisma from "../lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.student.findFirst({
    where: {
        studentUsername: body.username,
    },
  });
 
//   if (user && (await bcrypt.compare(body.password, user.studentPassword as string))) {
//     const { studentPassword, ...userWithoutPass } = user;
//     return new Response(JSON.stringify(userWithoutPass));
//   } else return new Response(JSON.stringify(null));
  if (user && (body.password === user.studentPassword)){
    const { studentPassword, ...userWithoutPass } = user;
    return new Response(JSON.stringify(userWithoutPass));
  } else {
    return new Response(JSON.stringify(null));
  }
}