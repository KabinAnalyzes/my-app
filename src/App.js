import React, { useEffect } from 'react';
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
} from '@mui/material';
import { LinkedIn, GitHub, Email, School, Code, TrendingUp } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { SvgIcon } from '@mui/material';

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


const Portfolio = () => {

  useEffect(() => {
    // Smooth scrolling (remains the same)
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
                  Kevin loun
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
                      href="https://www.linkedin.com/in/kevin-loun/"
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


      {/* --- REST OF THE SECTIONS (About, Skills, Education, Projects, Contact, Footer) remain the same as the previous version --- */}

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
                       IMS (Optional)
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
                       QMF (Optional)
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
                       Agile (if applicable)
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

       {/* Projects Section */}
       <Box
         id="projects"
         sx={{
           py: 10,
           px: { xs: 4, md: 8 },
           bgcolor: 'background.default',
         }}
       >
         <Typography variant="h2" align="center" gutterBottom>
           Projects
         </Typography>
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           style={{ width: '100%' }}
         >
           <Grid container spacing={6} justifyContent="center">
             <Grid item xs={12} md={6} lg={5}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                   <Typography variant="h3" gutterBottom>
                   Shinjuku ObjectDetection
                   </Typography>
                   <Typography
                     variant="h5"
                     color="text.secondary"
                     gutterBottom
                   >
                     The Shibuya Crossing Pedestrian Detector is a deep learning project aimed at detecting pedestrians crossing the street at the iconic Shibuya Crossing in Tokyo. 
                     This project utilizes state-of-the-art object detection techniques to identify pedestrians in real-time footage. The project was coded in Python and 
                     The model is trained using the CrowdHuman dataset then fine-tuned using the MMdetection framework for transfer learning.
                   </Typography>
                   <Typography variant="body1" paragraph>
                   </Typography>
                 </Paper>
               </motion.div>
             </Grid>
             <Grid item xs={12} md={6} lg={5}>
               <motion.div variants={itemVariants}>
                 <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                   <Typography variant="h3" gutterBottom>
                   Petal Planner 🌱
                   </Typography>
                   <Typography
                     variant="h5"
                     color="text.secondary"
                     gutterBottom
                   >
                    A web application built with Python Flask (backend) and HTML/CSS (frontend) designed to boost productivity through daily motivational 
                    quotes and a gamified to-do list. Users can sign up and log in securely via OAuth, with encrypted credentials stored in a SQL database. 
                    Each completed task helps grow a personalized digital plant, turning productivity into a thriving virtual garden.
                   </Typography>
                 </Paper>
               </motion.div>
             </Grid>
             {/* Add more project items as needed */}
           </Grid>
         </motion.div>
       </Box>

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
           &copy; {new Date().getFullYear()} Your Name. All rights reserved.
         </Typography>
       </Box>

    </ThemeProvider>
  );
};

export default Portfolio;