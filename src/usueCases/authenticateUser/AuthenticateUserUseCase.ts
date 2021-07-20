import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { client } from "../../prisma/client";

interface IRequest {
  username: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ username, password }: IRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (!userAlreadyExists) {
      throw new Error("User or password incorrect!");
    }

    const passwordMatch = compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error("User or password incorrect!");
    }

    const token = sign({}, "025fa5dd-77ea-40a5-8c1a-ed9dfbd6a1b5", {
      subject: userAlreadyExists.id,
      expiresIn: "20s",
    });

    return { token };
  }
}

export { AuthenticateUserUseCase };
