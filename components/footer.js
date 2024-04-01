import { Box } from '@chakra-ui/react'





const Footer =  ()=>{
    return(
        <Box textAlign="center" mt={10}>
            &copy; { new Date().getFullYear()} Syncbas . All Rights Reserved.
        </Box>
    )
}



export default Footer;