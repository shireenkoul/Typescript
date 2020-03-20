let userInput: unknown;
let userString: string;

userInput = 5;
userInput = "Koul";

if (typeof userInput === "string") {
  userString = userInput;
}

function generateError(message: string, code: number) : never{
  throw { message: message, code: code };
}

generateError("An Error Occurred!!!", 5000);
