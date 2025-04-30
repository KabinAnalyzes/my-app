import { useEffect, useState, useRef } from 'react'; // Import useRef
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Tooltip,
  Stack,
  // Divider, // Removed if not used elsewhere
  Fade // Import Fade for smooth entry
} from '@mui/material';
import { LinkedIn, GitHub, Email, School, Code, TrendingUp } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { SvgIcon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// --- THEME, ANIMATIONS, ICONS remain the same ---
// Custom theme (remains the same)
const theme = createTheme({
  palette: {
    primary: {
      main: '#222', // Very dark grey, almost black
      light: '#444',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#888', // Slightly lighter medium grey
      light: '#bbb',
      dark: '#666',
      contrastText: '#fff',
    },
    background: {
      default: '#f9f9f9', // Very light grey
      paper: '#fff',
    },
    text: {
      primary: '#111', // Almost black
      secondary: '#666', // Slightly darker medium grey
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Roboto font
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.1,
      marginBottom: '1rem',
      color: '#111',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      marginBottom: '0.75rem',
      color: '#111',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      marginBottom: '0.5rem',
      color: '#111',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      marginBottom: '0.5rem',
      color: '#111',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      marginBottom: '0.5rem',
      color: '#111',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      marginBottom: '0.5rem',
      color: '#111',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#333',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#555',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      color: '#777',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,.1)',
          backgroundColor: '#fff',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: '#111',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '0',
          padding: '0.75rem 1.5rem',
          color: '#111',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        contained: {
          boxShadow: '0 2px 5px rgba(0,0,0,.2)',
          backgroundColor: '#222',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#333',
          },
        },
        outlined: {
          borderColor: '#888',
          color: '#111',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          boxShadow: '0 2px 6px rgba(0,0,0,.1)',
          backgroundColor: '#fff',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Keeping the square avatar style
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#ddd',
        },
      },
    },
  },
});

// Animation variants (remains the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Custom Python Icon Component (remains the same)
const PythonIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M471.62 131.57c7.41-22.83 6.65-48.74-1.92-70.83-10.15-28-31.42-51.55-59.91-62.1-13.6-5-27.42-7.6-41.13-7.6h-73.27c-13.71 0-27.54 2.6-41.13 7.6-28.49 10.55-49.76 34.1-59.91 62.1-8.57 22.1-9.33 48-1.92 70.83l62.7 193.92v115.15h-83.1c-16.1 0-29.1 13-29.1 29.1 0 16.1 13 29.1 29.1 29.1h249.4c16.1 0 29.1-13 29.1-29.1 0-16.1-13-29.1-29.1-29.1h-83.1v-115.15l62.7-193.92z"
    />
  </SvgIcon>
);
// --- END of unchanged sections ---

// --- PROJECT DATA ---
const projectsData = [
  {
    title: 'Shinjuku Object Detection',
    description:
      'The Shibuya Crossing Pedestrian Detector is a deep learning project aimed at detecting pedestrians crossing the street at the iconic Shibuya Crossing in Tokyo. This project utilizes state-of-the-art object detection techniques to identify pedestrians in real-time footage. The project was coded in Python and the model is trained using the CrowdHuman dataset then fine-tuned using the MMdetection framework for transfer learning.',
    link: 'https://github.com/KabinAnalyzes/Shinjuku-ObjectDetection', // Add your actual project link
  },
  {
    title: 'Petal Planner 🌱',
    description:
      'A web application built with Python Flask (backend) and HTML/CSS (frontend) designed to boost productivity through daily motivational quotes and a gamified to-do list. Users can sign up and log in securely via OAuth, with encrypted credentials stored in a SQL database. Each completed task helps grow a personalized digital plant, turning productivity into a thriving virtual garden.',
    link: 'https://github.com/KabinAnalyzes/PetalPlanner', // Add your actual project link
  },
 // {
   // title: 'Another Cool Project', // Add more projects
    //description:
     // 'Description for another cool project. Detail the technologies used and the purpose of the project.',
   // link: 'https://github.com/your-github/another-project', // Add your actual project link
 // },
  //  {
   // title: 'Yet Another Project', // Add more projects
   // description:
   //   'Description for yet another project. Detail the technologies used and the purpose of the project.',
   // link: 'https://github.com/your-github/yet-another-project', // Add your actual project link
 // },
];

// Define a consistent height for each project item in the carousel
const PROJECT_ITEM_HEIGHT = 300; // Adjust as needed

const Portfolio = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const carouselRef = useRef(null); // Ref for the carousel container
  const autoScrollIntervalRef = useRef(null); // Ref for the interval ID

  // Function to move to the next project
  const moveToNextProject = () => {
    setActiveProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  // Function to move to the previous project
  const moveToPreviousProject = () => {
    setActiveProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Start the auto-scroll timer
  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(moveToNextProject, 5000); // Scroll every 5 seconds
  };

  // Stop the auto-scroll timer
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  // Effect for auto-scrolling
  useEffect(() => {
    startAutoScroll();

    // Cleanup on component unmount
    return () => {
      stopAutoScroll();
    };
  }, [activeProjectIndex]); // Restart interval if activeProjectIndex changes (e.g., manual scroll)

  // Effect for smooth scrolling to anchor links
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);


  return (
    <ThemeProvider theme={theme}>
      {/* AppBar remains the same */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Kevin Loun
          </Typography>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#skills">
            Skills
          </Button>
          <Button color="inherit" href="#education">
            Education
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* --- MODIFIED Hero Section --- */}
      <Box
        sx={{
          py: 12,
          px: { xs: 4, md: 8 },
          maxWidth: 1400,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* --- AVATAR Grid Item (Now first) --- */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    // Adjust justification based on screen size if needed
                    justifyContent: { xs: 'center', md: 'flex-end' }, // Center on small, right-align on medium+
                    paddingRight: { md: 4 } // Add some padding on the right for md+ screens
                  }}
                >
                  <Avatar
                    alt="Your Profile Picture"
                    src="/PFP.JPG"// Update this path
                    sx={{
                      width: 250,
                      height: 250,
                      boxShadow: '0 4px 8px rgba(0,0,0,.15)',
                      border: '4px solid #fff',
                      // borderRadius: '0' // Kept from theme override
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>

            {/* --- TEXT/LINKS Grid Item (Now second) --- */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h1">
                  Kevin Loun
                </Typography>
                <Typography variant="h2" color="text.secondary" gutterBottom>
                  Associate Analyst, App Development
                </Typography>
                <Typography variant="body1" paragraph>
                  A highly motivated and results-oriented Mainframe COBOL
                  developer with 1 year of experience in designing,
                  developing, and maintaining critical business applications.
                  Proficient in COBOL, JCL, DB2, VSAM, and other mainframe
                  technologies. Passionate about leveraging robust mainframe
                  capabilities to deliver efficient and reliable solutions.
                </Typography>
                <Stack direction="row" spacing={2} mt={2}>
                  <Tooltip title="LinkedIn Profile">
                    <IconButton
                      color="primary"
                      aria-label="linkedin"
                      href="https://www.linkedin.com/in/kevin-loun/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="GitHub Profile">
                    <IconButton
                      color="primary"
                      aria-label="github"
                      href="https://github.com/KabinAnalyzes?tab=repositories" // Corrected GitHub link
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Email Me">
                    <IconButton
                      color="primary"
                      aria-label="email"
                      href="mailto:kvn.loun@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Email />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
      {/* --- END of Hero Section --- */}


      {/* --- REST OF THE SECTIONS (About, Skills, Education, Contact, Footer) remain the same as the previous version --- */}

      {/* About Section */}
       <Box
         id="about"
         sx={{
           py: 10,
           px: { xs: 4, md: 8 },
           bgcolor: 'background.paper',
         }}
       >
         <Typography variant="h2" align="center" gutterBottom>
           About Me
         </Typography>
         <Paper elevation={3} sx={{ p: 6, maxWidth: 900, mx: 'auto' }}>
           <Typography variant="body1">
           With a strong foundation in mathematics, statistics, and data science, I began my career exploring the power of data—uncovering patterns, building models, and drawing meaningful insights to drive decision-making. Over time, I discovered a growing interest in the systems that power enterprise-scale data environments, which led me to the world of mainframes.
           </Typography>
           <Typography variant="body1" sx={{ mt: 3 }}>
           Today, I work as a Mainframe Analyst, leveraging both my analytical background and technical skills to support and optimize legacy systems that are critical to large organizations. My unique path allows me to bring a data-driven mindset to complex system maintenance and modernization efforts, bridging the gap between traditional infrastructure and modern analytical thinking.
           </Typography>
         </Paper>
       </Box>

       {/* Skills Section */}
       <Box
         id="skills"
         sx={{
           py: 10,
           px: { xs: 4, md: 8 },
           bgcolor: 'background.default',
         }}
       >
         <Typography variant="h2" align="center" gutterBottom>
           Skills
         </Typography>
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           style={{ width: '100%' }}
         >
           <Grid container spacing={4} justifyContent="center"> {/* Centered skill items */}
             <Grid item xs={12} sm={6} md={4} lg={3}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                   <Typography variant="h3" gutterBottom>
                     Programming Languages
                   </Typography>
                   <Stack direction="column" spacing={1} alignItems="center">
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       COBOL
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       SQL
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       R & R Studio
                     </Typography>
                      <Typography variant="body1">
                        <PythonIcon sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                        Python
                      </Typography>
                      <Typography variant="body1">
                        <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                        Java
                      </Typography>
                   </Stack>
                 </Paper>
               </motion.div>
             </Grid>
             {/* Other Skill Grid Items ... */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                   <Typography variant="h3" gutterBottom>
                     Databases
                   </Typography>
                   <Stack direction="column" spacing={1} alignItems="center">
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       DB2
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       VSAM
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       IMS
                     </Typography>
                   </Stack>
                 </Paper>
               </motion.div>
             </Grid>
             <Grid item xs={12} sm={6} md={4} lg={3}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                   <Typography variant="h3" gutterBottom>
                     Operating Systems
                   </Typography>
                   <Stack direction="column" spacing={1} alignItems="center">
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       z/OS
                     </Typography>
                   </Stack>
                 </Paper>
               </motion.div>
             </Grid>
             <Grid item xs={12} sm={6} md={4} lg={3}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                   <Typography variant="h3" gutterBottom>
                     Tools & Technologies
                   </Typography>
                   <Stack direction="column" spacing={1} alignItems="center">
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       TSO/ISPF
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       SDSF
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       Endevor/ChangeMan
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       File-AID
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       QMF
                     </Typography>
                   </Stack>
                 </Paper>
               </motion.div>
             </Grid>
             <Grid item xs={12} sm={6} md={4} lg={3}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                   <Typography variant="h3" gutterBottom>
                     Methodologies
                   </Typography>
                   <Stack direction="column" spacing={1} alignItems="center">
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       Waterfall
                     </Typography>
                     <Typography variant="body1">
                       <Code sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                       Agile
                     </Typography>
                   </Stack>
                 </Paper>
               </motion.div>
             </Grid>
             <Grid item xs={12} sm={6} md={4} lg={3}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={2} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                   <Typography variant="h3" gutterBottom>
                     Soft Skills
                   </Typography>
                   <Stack direction="column" spacing={1} alignItems="center">
                     <Typography variant="body1">
                       Problem-solving
                     </Typography>
                     <Typography variant="body1">
                       Analytical skills
                     </Typography>
                     <Typography variant="body1">
                       Communication
                     </Typography>
                     <Typography variant="body1">
                       Teamwork
                     </Typography>
                     <Typography variant="body1">
                       Attention to detail
                     </Typography>
                     <Typography variant="body1">
                        <TrendingUp sx={{ mr: 1, fontSize: 'inherit', verticalAlign: 'middle' }} />
                        Data Analysis
                      </Typography>
                   </Stack>
                 </Paper>
               </motion.div>
             </Grid>
           </Grid>
         </motion.div>
       </Box>

       {/* Education Section */}
       <Box
         id="education"
         sx={{
           py: 10,
           px: { xs: 4, md: 8 },
           bgcolor: 'background.paper',
         }}
       >
         <Typography variant="h2" align="center" gutterBottom>
           Education
         </Typography>
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           style={{ width: '100%' }}
         >
           <Grid container spacing={4} justifyContent="center">
             {/* Example Education Item 1: Degree */}
             <Grid item xs={12} md={6}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                    <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                      <School color="primary" />
                      <Typography variant="h3">
                        B.A. Mathematics & Statistics
                      </Typography>
                    </Stack>
                   <Typography variant="h5" color="text.secondary" gutterBottom>
                     Pomona College
                   </Typography>
                   <Typography variant="body2" color="text.secondary" gutterBottom>
                     Claremont, CA
                   </Typography>
                   <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                   Emphasized coursework in probability, statistics, and applied mathematics with a strong focus on data-driven problem solving. Gained foundational experience in data analytics and data science principles, including statistical modeling, data visualization, and predictive analysis. Developed a deep analytical mindset and proficiency in interpreting complex datasets to support evidence-based decision-making.
                   </Typography>
                 </Paper>
               </motion.div>
             </Grid>
             {/* Example Education Item 2: Certification */}

             {/* Add more Grid items for other degrees/certifications */}
           </Grid>
         </motion.div>
       </Box>

       {/* --- Integrated Projects Section (Vertical Carousel) --- */}
       <Box
         id="projects"
         sx={{
           py: 10,
           px: { xs: 4, md: 8 },
           bgcolor: 'background.default',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
         }}
       >
         <Typography variant="h2" align="center" gutterBottom>
           Projects
         </Typography>

         {/* Carousel Container */}
         {/* Using Grid to potentially align carousel next to other content if needed */}
         <Grid container spacing={6} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8} lg={6}> {/* Adjust grid size as needed */}
                <Box
                  ref={carouselRef} // Attach ref
                  sx={{
                    width: '100%',
                    maxWidth: 700, // Limit the carousel width
                    height: PROJECT_ITEM_HEIGHT, // Fixed height to show one project at a time
                    overflow: 'hidden',
                    position: 'relative', // Needed for absolute positioning of controls
                    mx: 'auto', // Center the carousel within its grid item
                    mt: 4, // Margin top
                    boxShadow: '0 4px 8px rgba(0,0,0,.15)', // Optional shadow for the carousel container
                    borderRadius: '0', // Keeps the square style
                  }}
                  onMouseEnter={stopAutoScroll} // Pause on hover
                  onMouseLeave={startAutoScroll} // Resume on mouse leave
                >
                  {/* Carousel Items Container */}
                  <motion.div
                    animate={{ y: -activeProjectIndex * PROJECT_ITEM_HEIGHT }} // Animate the y position
                    transition={{ type: 'tween', duration: 0.5 }} // Smooth tween animation
                    style={{ display: 'flex', flexDirection: 'column' }} // Stack items vertically
                  >
                    <AnimatePresence initial={false}> {/* Use AnimatePresence for exit animations if needed later */}
                      {projectsData.map((project, index) => (
                        // Use motion.div for each project item for potential individual animations
                        <motion.div
                          key={index}
                          // initial={{ opacity: 0, y: 50 }} // Example individual item animation
                          // animate={{ opacity: 1, y: 0 }}
                          // exit={{ opacity: 0, y: -50 }}
                          // transition={{ duration: 0.3 }}
                        >
                          <Paper
                            elevation={3}
                            sx={{
                              p: 4,
                              width: '100%',
                              height: PROJECT_ITEM_HEIGHT, // Fixed height for each item
                              boxSizing: 'border-box', // Include padding in height
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center', // Center content vertically
                            }}
                          >
                            <Typography variant="h3" gutterBottom>
                              {project.title}
                            </Typography>
                            <Typography variant="body1" paragraph> {/* Changed to body1 for readability */}
                              {project.description}
                            </Typography>
                            {project.link && (
                              <Button
                                variant="outlined"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ mt: 2, alignSelf: 'flex-start' }} // Align button to the left
                              >
                                Learn More
                              </Button>
                            )}
                          </Paper>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </Box>

                {/* Carousel Navigation Controls */}
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                  <Tooltip title="Previous Project">
                    <IconButton color="primary" onClick={() => { stopAutoScroll(); moveToPreviousProject(); }}>
                      <ArrowUpwardIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Next Project">
                    <IconButton color="primary" onClick={() => { stopAutoScroll(); moveToNextProject(); }}>
                      <ArrowDownwardIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Stack>
            </Grid>

            {/* Optional: Add another grid item here for text or image next to the carousel */}
            {/* <Grid item xs={12} md={4} lg={3}>
                <Paper elevation={1} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                    <Typography variant="h4" gutterBottom>Project Showcase</Typography>
                    <Typography variant="body1" color="text.secondary">
                        Browse through some of my recent work below.
                    </Typography>
                </Paper>
            </Grid> */}

         </Grid>
       </Box>
       {/* --- END of Integrated Projects Section --- */}


       {/* Contact Section */}
       <Box
         id="contact"
         sx={{
           py: 10,
           px: { xs: 4, md: 8 },
           bgcolor: 'background.paper',
         }}
       >
         <Typography variant="h2" align="center" gutterBottom>
           Contact Me
         </Typography>
         <Paper elevation={3} sx={{ p: 6, maxWidth: 600, mx: 'auto' }}>
           <Typography variant="body1" align="center" paragraph>
             I'm always open to discussing new opportunities and collaborations in the mainframe space. Feel free
             to reach out!
           </Typography>
           <Stack direction="row" justifyContent="center" spacing={3}>
             <Tooltip title="LinkedIn Profile">
               <IconButton
                 color="primary"
                 aria-label="linkedin"
                 href="https://www.linkedin.com/in/kevin-loun/" // Add your URL
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <LinkedIn sx={{ fontSize: 40, color: '#111' }} />
               </IconButton>
             </Tooltip>
             <Tooltip title="GitHub Profile">
               <IconButton
                 color="primary"
                 aria-label="github"
                 href="https://github.com/KabinAnalyzes?tab=repositories" // Add your URL
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <GitHub sx={{ fontSize: 40, color: '#111' }} />
               </IconButton>
             </Tooltip>

           </Stack>
           <Typography
             variant="body2"
             align="center"
             sx={{ mt: 3, color: 'text.secondary' }}
           >

           </Typography>
         </Paper>
       </Box>

       {/* Footer */}
       <Box sx={{ bgcolor: '#111', color: '#aaa', py: 3, textAlign: 'center' }}>
         <Typography variant="body2">
           &copy; {new Date().getFullYear()} Kevin Loun. All rights reserved.
         </Typography>
       </Box>

    </ThemeProvider>
  );
};

export default Portfolio;
