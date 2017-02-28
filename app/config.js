var config = {};

config.db = {};
config.dbHashes = {};
config.redis = {};

config.db.host = process.env.DB_HOST;
config.db.user = process.env.DB_USER;
config.db.password = process.env.DB_PASSWORD;
config.db.database = 'torneio';

config.dbHashes.host = process.env.DB_HOST;
config.dbHashes.user = process.env.DB_USER;
config.dbHashes.password = process.env.DB_PASSWORD;
config.dbHashes.database = 'passsalts';

config.redis.host = process.env.REDIS_HOST;
config.redis.port = process.env.REDIS_PORT;

module.exports = config;