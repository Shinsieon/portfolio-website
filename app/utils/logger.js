import fs from "fs";

const logFilePath = "./visitorCount.log";

const logVisitor = () => {
  try {
    const currentCount = parseInt(fs.readFileSync(logFilePath, "utf-8")) || 0;
    const newCount = currentCount + 1;
    fs.writeFileSync(logFilePath, newCount.toString());
  } catch (error) {
    console.error("Error logging visitor:", error);
  }
};

export default logVisitor;
