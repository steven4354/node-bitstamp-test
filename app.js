const key = "abc3def4ghi5jkl6mno7";
const secret = "abcdefghijklmno";
const clientId = "123123";

const bitstamp = new Bitstamp({
    key,
    secret,
    clientId,
    timeout: 5000,
    rateLimit: true //turned on by default
});

const run = async () => {
    const balance = await bitstamp.balance().then(({body:data}) => data);
};

run()
