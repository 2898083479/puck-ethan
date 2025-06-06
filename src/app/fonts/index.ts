import localFont from "next/font/local";

const MarkFont = localFont({
    src: './my-font/mark-font-manul.ttf',
    display: "swap",
})

const Fonts = [
    {
        label: "Mark Font",
        value: MarkFont.className
    }
]

export { Fonts };