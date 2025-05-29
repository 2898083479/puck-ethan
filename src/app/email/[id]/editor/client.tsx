"use client"

import { Config, Puck } from "@measured/puck";
import "@measured/puck/puck.css";

const config: Config = {
    components: {
        HeadingBlock: {
            fields: {
                children: {
                    type: "text"
                },
            },
            render: () => {
                return (
                    <div>
                        test
                    </div>
                )
            }
        }
    }
}

export default function Client() {
    return (
        <Puck
            config={config}
            data={{}}
        />
    )
}