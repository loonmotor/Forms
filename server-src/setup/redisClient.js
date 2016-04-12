import redis from 'redis';

const
	redisClient = redis.createClient();

redisClient.on('ready', () => console.log('Redis is ready'));
redisClient.on('error', () => console.log('Failed to connect to Redis'));

export default redisClient;