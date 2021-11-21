import { sign } from 'jsonwebtoken';

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "025fa5dd-77ea-40a5-8c1a-ed9dfbd6a1b5", {
      subject: userId,
      expiresIn: "20s",
    });

    return token;
  }
}

export { GenerateTokenProvider }