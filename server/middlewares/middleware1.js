//middlewares simply retuns as a function so just write confidently


export const middleware1 = (req, res, next) => {
        // res.send(req.baseUrl);
        // res.send(req.app);
        // res.send(req.body);
        // res.send(req.host);
        // res.send(req.ip);
        // res.send(req.method +" "+ req.baseUrl);
        // res.send(req.route);
        // res.send(req.url);
        // res.send(req.originUrl);
        // console.dir(req.ips);
        // console.dir(req.method);
        // res.send(req.xhr)
        console.log('middleware1 reached:', req.method, req.originalUrl);
        console.dir(res.app.get('view engine'));
        console.dir(res.app === req.app);
        console.dir(req.baseUrl);

        res.json({
            headers: req.headers,
            method : req.method
        });

        next();
}

export const loggerDuration = (req, res, next) => {
    
    const start = Date.now();

    //res is an event emitter object 
    //so it emits a finish event

    res.on("finish", () => {
        const end = Date.now();
        const duration = end - start;
         console.log(
            `[TIMER] ${req.method} ${req.url} - ${duration}ms`
        );
    });

    next();
    // console.log("[LOGGER] ", req.method, "  ", req.originalUrl);
    // console.log("Duration ", duration)
}

export const authenticate = (req, res, next) => {

    if(!req.headers.authorization){
        res.status(401).json({ message: "Unauthorized" });
    } 
    next();
}