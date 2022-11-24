import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
    {/* const theme = useTheme(); */}
    {/* const colors = tokens(theme.palette.mode); */}

    const unityContextLocation = "../../assets/simulationUnity/Build"

    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "${unityContextLocation}/simulationUnity.loader.js",
        dataUrl: "${unityContextLocation}/simulationUnity.data",
        frameworkUrl: "${unityContextLocation}/simulationUnity.framework.js",
        codeUrl: "${unityContextLocation}/simulationUnity.wasm",
    });

    const loadingPercentage = Math.round(loadingProgression * 100);

    return <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <Header title="FIRE SIMULATION" />
            {isLoaded === false && (
                // We'll conditionally render the loading overlay if the Unity
                // Application is not loaded.
                <Box 
                    position= "absolute"
                    top= "0"
                    left= "0"
                    width= "100%"
                    height= "100%"
                    background= "grey"
                    /* We'll set the following Flex properties in order to center the text. */
                    display= "flex"
                    justify-content= "center"
                    align-items= "center"
                >
                    <p>Loading... ({loadingPercentage}%)</p>
                </Box>
            )}

            <Unity className="unity" unityProvider={unityProvider} />
        </Box>
}

export default Game;