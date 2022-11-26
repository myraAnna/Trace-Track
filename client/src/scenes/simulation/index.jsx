import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { Unity, useUnityContext } from "react-unity-webgl";
import Header from "../../components/Header";

const Game = () => {

    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "../../assets/simulationUnity/build/simulationUnity.loader.js", 
        dataUrl: "../../assets/simulationUnity/build/simulationUnity.data",
        frameworkUrl: "../../assets/simulationUnity/build/simulationUnity.framework.js",
        codeUrl: "../../assets/simulationUnity/build/simulationUnity.wasm",
    });

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
                    />     
            </Box>
        </Box>
    </Box>
}

export default Game;