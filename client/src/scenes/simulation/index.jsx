import React, { useState, useEffect, useCallback } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { Unity, useUnityContext } from "react-unity-webgl"; //current version
import Header from "../../components/Header";

const Game = () => {

    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "../../assets/simulationUnity/build/simulationUnity.loader.js", 
        dataUrl: "../../assets/simulationUnity/build/simulationUnity.data",
        frameworkUrl: "../../assets/simulationUnity/build/simulationUnity.framework.js",
        codeUrl: "../../assets/simulationUnity/build/simulationUnity.wasm",
    });

    //store the device pixel ratio
    const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
    );

    const handleChangePixelRatio = useCallback(
        function () {
            //update the device pixel ratio of the Unity
            //application to match the device pixel ratio of the browser
            const updateDevicePixelRatio = function () {
                setDevicePixelRatio(window.devicePixelRatio);
            };
            //a media matcher which watches for changes in the device pixel ratio
            const mediaMatcher = window.matchMedia(
                'screen and (resolution: ${devicePixelRatio}dppx)'
            );
            //adding an event listener to the media matcher which will update the
            //device pixel ratio of the Unity App when the device pixel
            //ratio changes
            mediaMatcher.addEventListener("change", updateDevicePixelRatio);
            return function () {
                //removing the event lustener when the components unmounts
                mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
            };
        },
        [devicePixelRatio]
    )

    const loadingPercentage = Math.round(loadingProgression * 100);

    return <Box m="20px">
        <Header title="BDI SIMULATION" subtitle="Unity WebGL" />
        <Box 
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            
            <Box 
                position="relative"
                width="800px"
                height="600px"
                >
                    {isLoaded === false && (
                        <Box 
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            background="grey"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h6" gutterBottom>Loading ... ({loadingPercentage}%)</Typography>
                        </Box>
                    )}
                    <Unity 
                        unityProvider={unityProvider} 
                        style={{ width:900, height:800 }}
                        devicePixelRatio={devicePixelRatio}
                    />     
            </Box>
        </Box>
    </Box>
}

export default Game;