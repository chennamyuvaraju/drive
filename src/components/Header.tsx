import { SimpleGrid, Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import { TimeIcon,InfoIcon, EmailIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {Collapse } from '@chakra-ui/react'

export default function Simple() {
    const [toggle, setToggle] = useState(true);

    const [isSm] = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        setToggle(!isSm);
    }, [isSm])
  
    return (
        <>  
            { <Collapse in={toggle}><SimpleGrid  columns={ {base: 1, md: 3 , lg: 3} } spacingX='30px' spacingY='0px' minHeight={'50px'} color={'#fff'} bg={'#333333'}>
                <Flex alignItems={'center'} justify={'center'} fontSize={'18px'} height={'50px'}><TimeIcon fontSize={'18px'} mr={'10px'} color='#F8A325'/>Training time: sun - fri (6am to 5pm)</Flex>
                <Flex alignItems={'center'} justify={'center'}  fontSize={'18px'} height={'50px'}><InfoIcon fontSize={'18px'} mr={'10px'} color='#F8A325'/>Twentynine Palms, California, United States</Flex>
                <Flex alignItems={'center'} justify={'center'} fontSize={'18px'} height={'50px'}><EmailIcon fontSize={'18px'} mr={'10px'} color='#F8A325'/>info@youremail.com</Flex>
            </SimpleGrid></Collapse>}
            {isSm && <SimpleGrid height="50px" bg={'#333333'} columns={1} cursor={'pointer'} onClick={()=>setToggle(!toggle)}> 
                <Flex alignItems={'center'} justify={'center'} fontSize={'25px'} color={'#fff'} >{!toggle ? <ChevronDownIcon/>: <ChevronUpIcon/>}</Flex>
            </SimpleGrid>}
        </>
    )
  }