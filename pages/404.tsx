import { Player } from "@lottiefiles/react-lottie-player";


export default function Custom404() {
    return (
        <>
        <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_kcsr6fcp.json"
        style={{
          height: "100vh",
          width: "100%",
        }}
        className="z-0"
        speed={1}
        //renderer="canvas"
      ></Player>
      <a href="/" className="text-indigo-600 hover:text-indigo-500">
                        Home
                      </a>
                      </>
    )
  }