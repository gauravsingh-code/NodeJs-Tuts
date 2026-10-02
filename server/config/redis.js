import {createClient} from "redis";

const redisClient = createClient({
    url: "redis://localhost:6379"
});

redisClient.on("error", (err) => console.log("Error while connecting to Redis", err));

redisClient.on("connect", () => console.log("Connected to Redis"));

// 👇 YOU MUST ADD THIS LINE TO ACTUALLY OPEN THE CLIENT
await redisClient.connect();

export default redisClient;