import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import { SiFiverr } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import Technologies from '../components/technologies'

export default function Home() {
  return (
    <Layout>
      <Container>
        {/* hero section */}
        <Box display={{ md: 'flex' }} mt={{ md: 40, base: 10 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mahesa Putra Baskoro Cahyo Ramadhan
            </Heading>
            <p>Programmer || IoT Engineering || EV Researcher || RnD Product</p>
            <p>Yogyakarta - Cikarang </p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile-pic.png"
              alt="Profile image"
            />
          </Box>
        </Box>

        {/* article section */}
        <br></br>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Who am I ?
          </Heading>
          <Paragraph>
            Mahesa Putra Baskoro is a software developer, in the case of work
            that I have handled so far is on the market place system, Internet
            of Things Project and Product Developer in the Research base.
          </Paragraph>
          <br></br>
          <Paragraph>
            You can see all the projects that I have handled in my github
            repository below.
          </Paragraph>
          <Box align="center" my={4}>
            <Link
              href="https://github.com/baskorocr"
              target="blank"
              legacyBehavior
            >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Projects
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Bantul, Yogyakarta , Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Completed the Primary School from SDN Sindang Mulya 02
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Completed the Junior High School from SMPN 03 Cibarusah
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed the Senior High School from SMAN 1 Cibarusah
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed the College from Amikom University Yogyakarta
          </BioSection>
          <BioSection></BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience and Award
          </Heading>
          <BioSection>
            <BioYear>2016</BioYear>
            2nd Place in MIT Android Developer Competition
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Justictor Line Follower Contest
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Marketing Freelance
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Cyber ​​technology short film competition
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            EOR line follower competition
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            SGD Robotic line follower competition
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            3nd Place in Project Exhibition Competition
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Hardware and Software Technician
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            IT Extraordinary Speaker
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Focus Line Follower Robot Contest Mentor
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Mentor of the Smart Competition and line follower
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Head of ITFEST Robotic Division Competition
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Junior Programmer Arduino
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Project Manager
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Project IoT and hardware specialist
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Project IoT and hardware specialist
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            Amicta IoT Contest nominees
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            IDENTIK RnD Competition
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            Data Communication Practical Assistant
          </BioSection>

          <BioSection>
            <BioYear>2021</BioYear>
            Assistant Forum Member
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Assistant Forum Member
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Product Development
          </BioSection>
          <BioSection>
            <BioYear>2021-2023</BioYear>
            Microcontroller Practical Assistant
          </BioSection>
          <BioSection>
            <BioYear>2021-2023</BioYear>
            Assistant Forum Vice Chair
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Kedaireka Internship at Culturobio (Testing Hardware IoT)
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            1nd Winner of Ai and IoT category in AMICTA
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            1nd Winner of Software Development in GKM Amikom
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            1st Place Favorite of IoT in GKM Amikom
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            2st Place Favorite of IoT in GKM Amikom
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            1nd Winner of Software Development in GKM Amikom
          </BioSection>
          <BioSection>
            <BioYear>2023-Now</BioYear>
            Dharma Polimetal Tbk Employees
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Technologies & Languages ♥
          </Heading>

          <Technologies />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find me on the web
          </Heading>
          <List display="flex" flexWrap="wrap">
            <ListItem w={{ base: '50%', sm: 'fit-content' }}>
              <Link href="https://github.com/baskorocr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>

            <ListItem w={{ base: '50%', sm: 'fit-content' }}>
              <Link href="https://instagram.com/syncbas_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>

            <ListItem w={{ base: '50%', sm: 'fit-content' }}>
              <Link
                href="https://www.linkedin.com/in/mahesa-putra-baskoro-cahyo-ramadhan-0ab7a6207/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem w={{ base: '50%', sm: 'fit-content' }}>
              <Link href="mailto:baskorocr@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={MdEmail} />}
                >
                  Email
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Box align="center" my={4}>
          <Link
            href="https://api.whatsapp.com/send/?phone=6289654825055&text&type=phone_number&app_absent=0"
            target="blank"
            legacyBehavior
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Whatsapp
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}
