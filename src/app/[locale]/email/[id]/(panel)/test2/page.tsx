"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

const Test2 = () => {
    const [url, setUrl] = useState('');
    const [outputPath, setOutputPath] = useState('');

    const syncFunc = () => {
        console.log("syncFunc");
        // fs.readFile('', 'utf-8', (err, data) => {
        //     if (err) {
        //         console.log("err", err);
        //     }
        //     console.log("data", data);
        // })
        // const data = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf-8');
        // console.log("data", data);
    }

    const handle = () => {
        console.log("handling ...")
    }

    const myPromise = new Promise((resolve, reject) => {
        console.log("myPromise");
        resolve(() => handle());
        console.log("done");
    })

    const asyncFunc = async () => {
        myPromise
            .then(() => {
                console.log("myPromise done");
            })
            .catch((error) => {
                console.log("myPromise error", error);
            })
        console.log("asyncFunc");
    }

    const downloadFile = async (url: string, outputPath: string) => {
        // const response = await fetch(url);
        // if (!response.ok || !response.body) {
        //     throw new Error("Failed to fetch file");
        // }
        // const fileStream = fs.createWriteStream(outputPath);
        // // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        // await pipeline(response.body as any, fileStream);
        console.log("File downloaded successfully");
    }

    // useEffect(() => {
    //     Promise.all([
    //         new Promise((resolve) => {
    //             setTimeout(() => {
    //                 resolve("done1");
    //             }, 1000);
    //         }),
    //         new Promise((resolve) => {
    //             setTimeout(() => {
    //                 resolve("done2");
    //             }, 2000);
    //         }),
    //     ]).then(results => {
    //         console.log("results", results);
    //     }).catch(error => {
    //         console.log("error", error);
    //     })
    // }, [])

    return (
        <div>
            <Button onClick={asyncFunc}>asyncFunc</Button>
            <Button onClick={syncFunc}>syncFunc</Button>
            <Input value={url} onChange={(e) => setUrl(e.target.value)} />
            <Input value={outputPath} onChange={(e) => setOutputPath(e.target.value)} />
            <Button onClick={() => downloadFile(url, outputPath)}>downloadFile</Button>
        </div>
    )
}

export default Test2;