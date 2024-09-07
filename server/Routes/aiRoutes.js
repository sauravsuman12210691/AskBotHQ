const { GoogleGenerativeAI } = require('@google/generative-ai');
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

// const filePath = path.join(__dirname, '../resume_txt/');

router.post('/getDetails', async (req, res) => {
    try {
        async function run() {

          // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
          const genAI = new GoogleGenerativeAI("AIzaSyBeGLlUf3YWvVs0m2chBi528AsZQZnJ4vw");
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
          const {orgName,querry, querryType} = req.body;
        const data =[
            {
                "company": "Tech Innovators Inc.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "28 paid leaves, 10 public holidays." },
                            { "question": "Apply for leave?", "answer": "Via HRMS on intranet." },
                            { "question": "Working hours?", "answer": "8 AM - 5 PM, flexible." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "Use IT Support Portal." },
                            { "question": "Computer slow?", "answer": "Reboot, contact IT if persists." },
                            { "question": "Connect to VPN?", "answer": "Download client, use credentials." }
                        ]
                    }
                ]
            },
            {
                "company": "Global Solutions Ltd.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "25 paid leaves, 12 public holidays." },
                            { "question": "Apply for leave?", "answer": "Via Employee Self-Service portal." },
                            { "question": "Working hours?", "answer": "9 AM - 6 PM, flexible hours." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "IT Helpdesk portal, 'Account Management'." },
                            { "question": "Computer slow?", "answer": "Clear temp files, restart." },
                            { "question": "Connect to VPN?", "answer": "Install from IT Downloads page." }
                        ]
                    }
                ]
            },
            {
                "company": "Enterprise Systems Corp.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "30 paid leaves, 10 public holidays." },
                            { "question": "Apply for leave?", "answer": "Submit via ESS portal." },
                            { "question": "Working hours?", "answer": "9 AM - 6 PM, flexible available." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "Visit IT Support page." },
                            { "question": "Computer slow?", "answer": "Restart, contact IT if needed." },
                            { "question": "Connect to VPN?", "answer": "Download from IT Resources." }
                        ]
                    }
                ]
            },
            {
                "company": "Tech Global Inc.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "26 paid leaves, 11 public holidays." },
                            { "question": "Apply for leave?", "answer": "HRMS portal." },
                            { "question": "Working hours?", "answer": "9 AM - 5 PM, flexible timings." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "IT portal, 'Reset Password'." },
                            { "question": "Computer slow?", "answer": "Reboot, then contact IT." },
                            { "question": "Connect to VPN?", "answer": "Install client from IT page." }
                        ]
                    }
                ]
            },
            {
                "company": "Innovative Systems Ltd.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "30 paid leaves, 10 public holidays." },
                            { "question": "Apply for leave?", "answer": "Via HR portal." },
                            { "question": "Working hours?", "answer": "8:30 AM - 5:30 PM, flexible hours." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "IT Helpdesk portal, 'Reset Password'." },
                            { "question": "Computer slow?", "answer": "Restart, report if unresolved." },
                            { "question": "Connect to VPN?", "answer": "Download VPN client, log in." }
                        ]
                    }
                ]
            },
            {
                "company": "Global Tech Corp.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "27 paid leaves, 12 public holidays." },
                            { "question": "Apply for leave?", "answer": "Through HRMS system." },
                            { "question": "Working hours?", "answer": "9 AM - 6 PM, with flexibility." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "Go to IT Support portal." },
                            { "question": "Computer slow?", "answer": "Try rebooting, contact IT if needed." },
                            { "question": "Connect to VPN?", "answer": "Install VPN from IT Resources." }
                        ]
                    }
                ]
            },
            {
                "company": "Digital Solutions Inc.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "25 paid leaves, 10 public holidays." },
                            { "question": "Apply for leave?", "answer": "Employee Self-Service portal." },
                            { "question": "Working hours?", "answer": "9 AM - 6 PM, flexible hours possible." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "IT portal, follow 'Forgot Password'." },
                            { "question": "Computer slow?", "answer": "Restart, then contact IT Support." },
                            { "question": "Connect to VPN?", "answer": "Download client, connect with credentials." }
                        ]
                    }
                ]
            },
            {
                "company": "Future Technologies Ltd.",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "30 paid leaves, 12 public holidays." },
                            { "question": "Apply for leave?", "answer": "Through the HR portal." },
                            { "question": "Working hours?", "answer": "9 AM - 5 PM, flexible options available." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "Visit IT Helpdesk portal." },
                            { "question": "Computer slow?", "answer": "Restart, contact IT if needed." },
                            { "question": "Connect to VPN?", "answer": "Download client, follow instructions." }
                        ]
                    }
                ]
            },
            {
                "company": "Tech Enterprises",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "28 paid leaves, 11 public holidays." },
                            { "question": "Apply for leave?", "answer": "Use HRMS platform." },
                            { "question": "Working hours?", "answer": "9 AM - 6 PM, flexible hours possible." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "IT portal, 'Forgot Password' section." },
                            { "question": "Computer slow?", "answer": "Reboot, contact IT if needed." },
                            { "question": "Connect to VPN?", "answer": "Install VPN client, log in." }
                        ]
                    }
                ]
            },
            {
                "company": "NextGen Solutions",
                "categories": [
                    {
                        "category": "HR Policies",
                        "questions": [
                            { "question": "Leave policy?", "answer": "26 paid leaves, 12 public holidays." },
                            { "question": "Apply for leave?", "answer": "HR portal, fill leave form." },
                            { "question": "Working hours?", "answer": "8 AM - 5 PM, flexible timing." }
                        ]
                    },
                    {
                        "category": "IT Support",
                        "questions": [
                            { "question": "Reset email password?", "answer": "Visit IT portal, reset password." },
                            { "question": "Computer slow?", "answer": "Restart, contact IT if issue persists." },
                            { "question": "Connect to VPN?", "answer": "Download client, log in with credentials." }
                        ]
                    }
                ]
            }
        ];
        const strdata =JSON.stringify(data);
        console.log(strdata);
        
          const prompt = `use ${strdata}  and reply with  answer to the question ,and the question is :
          I work in ${orgName} i want to know about ${querryType} ${querry} .`;
        
          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = response.text();
          let cleanedString = text.replace(/```javascript|```/g, '');
          cleanedString = cleanedString.replace("json", "");
          

  
          res.send({ cleanedString});
        }
        
        run();
    
        
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'An error occurred' });
    }
});

router.get('/:userId', (req, res) => {
    res.send("User result");
});

module.exports = router;