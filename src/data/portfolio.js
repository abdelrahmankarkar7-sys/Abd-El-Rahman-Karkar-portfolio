import profileImg from '../assets/profile.jpg';
import deepfakeImg from '../assets/deepfake-project.png';
import brainTumorImg from '../assets/brain-tumor-project.png';
import bankRiskImg from '../assets/bank-risk-project.jpg';

/**
 * Professional Portfolio Data Source for Abd El Rahman Mohamed Karkar
 * All information strictly derived from official CV & verified credentials.
 * Easily modifiable without touching UI components.
 */

export const personalInfo = {
  name: "Abd El Rahman Karkar",
  fullName: "Abd El Rahman Mohamed Karkar",
  title: "AI Engineer | Machine Learning & Deep Learning",
  roleHeadline: "AI Engineer specializing in end-to-end Machine Learning and Deep Learning pipelines, Computer Vision, and intelligent systems.",
  summary: "AI Engineer with hands-on experience designing and developing end-to-end Machine Learning and Deep Learning pipelines using Python, from data preparation and feature engineering to model training, validation, and deployment. Applied AI and ML techniques across Computer Vision, financial fraud detection, and multimodal AI-generated content detection, working with datasets ranging from 2,000+ samples to 50,000+ transaction records. Continuously strengthening industry-relevant AI/ML skills through applied projects and hands-on development.",
  email: "abdelrahmankarkar7@gmail.com",
  phone: "+20 106 864 8652",
  location: "Egypt",
  avatar: profileImg,
  cvPath: `${import.meta.env.BASE_URL}assets/Abd-El-Rahman-Karkar-CV.pdf`,
  socialLinks: {
    linkedin: "https://linkedin.com/in/abd-el-rhaman-karkar",
    github: "https://github.com/abdelrahmankarkar7-sys",
    email: "mailto:abdelrahmankarkar7@gmail.com",
  },
  stats: [
    { label: "Data Records Processed", value: "6,000,000+" },
    { label: "MRI Scans Analyzed", value: "3,000+" },
    { label: "Multimodal Modalities", value: "3 (Img, Aud, Txt)" },
    { label: "Peak Model Accuracy", value: "99.78%" },
  ]
};

export const skillsData = [
  {
    category: "Machine Learning",
    description: "Predictive modeling, classification, and advanced feature pipelines",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Feature Engineering",
      "Model Training & Evaluation",
      "Cross-Validation",
      "Imbalanced Data Handling"
    ]
  },
  {
    category: "Deep Learning",
    description: "Neural architectures, computer vision, and sequence modeling",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "CNNs",
      "RNNs",
      "LSTMs",
      "Transformers"
    ]
  },
  {
    category: "AI Domains & Frameworks",
    description: "Applied computer vision and modern NLP ecosystems",
    skills: [
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "OpenCV",
      "Hugging Face",
      "Multimodal AI",
      "Image Augmentation"
    ]
  },
  {
    category: "Data Analysis & Processing",
    description: "Exploration, statistical modeling, and data preparation",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Exploratory Data Analysis (EDA)",
      "Data Preprocessing",
      "Data Cleaning"
    ]
  },
  {
    category: "Pipelines & Deployment",
    description: "Productionizing ML models and workflow orchestration",
    skills: [
      "Flask",
      "MLflow",
      "Docker",
      "Git",
      "GitHub",
      "RESTful APIs",
      "Model Serialization"
    ]
  },
  {
    category: "Databases & Development Tools",
    description: "Data storage systems and development environments",
    skills: [
      "MySQL",
      "SQL Server",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab"
    ]
  }
];

export const projectsData = [
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection Using Deep Learning",
    category: "Computer Vision",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow", "Flask", "Python", "CNN"],
    image: brainTumorImg,
    shortDescription: "End-to-end deep learning classification pipeline detecting brain tumors from MRI scans with 92% accuracy, deployed as a real-time web application.",
    keyMetrics: [
      { label: "Accuracy", value: "~92%" },
      { label: "Dataset Size", value: "3,000+ Scans" },
      { label: "Deployment", value: "Flask Web App" }
    ],
    highlights: [
      "Trained and evaluated a CNN-based classification model on 3,000+ MRI scans, achieving approximately 92% classification accuracy.",
      "Preprocessed and augmented 3,000+ MRI scans using normalization, resizing, and data augmentation techniques to improve model generalization and reduce overfitting.",
      "Built and deployed an end-to-end Flask web application integrating image upload with real-time CNN-based MRI tumor classification."
    ],
    details: {
      problem: "Early and precise detection of brain tumors from MRI scans is critical for timely medical treatment, but manual inspection by radiologists is time-consuming and can be prone to fatigue-induced errors.",
      solution: "Developed a Convolutional Neural Network (CNN) pipeline with automated contrast normalization and spatial data augmentation, packaged behind an intuitive Flask web application for instant diagnostic assistance.",
      dataset: "3,000+ curated high-resolution brain MRI scans categorized across tumor classes and healthy scans.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy", "Matplotlib"],
      methodology: "Preprocessed raw MRI scans via skull-stripping principles, adaptive histogram equalization, and spatial transformations. Employed deep convolutional blocks with Batch Normalization, Dropout, and Adam optimizer.",
      results: "Reached ~92% classification accuracy with balanced sensitivity and specificity across diverse scan qualities."
    },
    githubUrl: "https://github.com/abdelrahmankarkar7-sys",
    liveUrl: null
  },
  {
    id: "bank-financial-risk-management",
    title: "Bank Financial Risk Management System",
    category: "Machine Learning",
    tags: ["Machine Learning", "XGBoost", "Random Forest", "Scikit-learn", "CTGAN", "SMOTE", "Finance", "Python"],
    image: bankRiskImg,
    shortDescription: "An end-to-end machine learning system built to help banks manage fraud detection in transactions and credit risk scoring for loan default.",
    keyMetrics: [
      { label: "Fraud Recall", value: "99.2%" },
      { label: "Transactions", value: "6M+ Records" },
      { label: "Fraud ROC-AUC", value: "0.995" }
    ],
    highlights: [
      "Fraud Detection: Analyzed over 6 million financial transactions and addressed severe class imbalance using CTGAN to generate realistic synthetic fraud samples, achieving a fraud detection rate (Recall) of ~99% (99.2%).",
      "Credit Risk Scoring: Built a model to predict the likelihood of a customer defaulting on a loan based on demographic and financial data, handling class imbalance with SMOTE.",
      "Advanced feature engineering: Derived financial indicators such as credit-to-income ratio, balance differences pre/post-transaction, and amount-to-balance ratio.",
      "Multi-model comparison: Trained and evaluated Decision Tree, Random Forest, and XGBoost for each module, selecting the best-performing model based on comprehensive metrics (Accuracy, Precision, Recall, F1, ROC-AUC).",
      "Goal: Deliver a smart analytical tool that supports decision-making at two critical points in the banking workflow — flagging fraudulent transactions in real time and assessing a customer's creditworthiness before loan approval — reducing financial losses and improving overall risk management efficiency."
    ],
    details: {
      problem: "Financial institutions lose billions to fraudulent transactions and bad debt defaults. Mitigating both risks requires high sensitivity to minority fraud events without unnecessarily disrupting legitimate customer banking flows.",
      solution: "Engineered an end-to-end predictive modeling system supporting two critical banking workflow points: real-time transaction fraud monitoring and customer creditworthiness evaluation prior to loan approval.",
      dataset: "Over 6 million financial banking transactions and comprehensive customer demographic/credit applicant records.",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Random Forest", "CTGAN (SDV)", "SMOTE (Imbalanced-learn)", "Joblib", "Seaborn", "Matplotlib"],
      methodology: "Handled extreme class imbalance using CTGAN for synthetic fraud generation and SMOTE for credit default. Derived balance differences and debt-to-income ratios. Optimized decision thresholds (Threshold=0.1) to achieve maximum fraud capture.",
      results: "Achieved a 99.2% fraud detection recall rate with 0.995 ROC-AUC on over 6M transactions, and 71.8% accuracy (0.668 ROC-AUC) on credit risk scoring, significantly cutting potential loan default exposure."
    },
    githubUrl: "https://github.com/abdelrahmankarkar7-sys",
    liveUrl: null
  },
  {
    id: "multimodal-deepfake-detection",
    title: "Multimodal Deepfake Detection System",
    category: "Deep Learning",
    tags: ["Deep Learning", "Computer Vision", "NLP", "Audio Processing", "Flask", "Transformers", "Python"],
    image: deepfakeImg,
    shortDescription: "An end-to-end AI system that detects AI-generated deepfake content across three modalities — images, audio, and text — unified in a single Flask web application.",
    keyMetrics: [
      { label: "Audio Accuracy", value: "99.78%" },
      { label: "Image Accuracy", value: "97.19%" },
      { label: "Text Accuracy", value: "97.00%" }
    ],
    highlights: [
      "Image detection: Benchmarked EfficientNet-B0, ResNet50, and ConvNeXt Tiny; best model achieved 97.19% accuracy.",
      "Audio detection: Extracted MFCC, Mel Spectrogram, and Chroma features; trained CNN, LSTM, and CNN-LSTM models, reaching 99.78% accuracy.",
      "Text detection: Compared BiLSTM with Attention, CNN-BiGRU, and DistilBERT to distinguish human-written from AI-generated text, reaching 97% accuracy.",
      "Unified web app: Users upload an image/audio file or enter text and instantly get a real/fake verdict."
    ],
    details: {
      problem: "The proliferation of generative AI and deepfakes across visual media, voice clones, and synthetic text presents major societal and cybersecurity risks that single-modality detectors fail to combat effectively.",
      solution: "Engineered a unified multimodal deepfake detection ecosystem combining state-of-the-art vision backbones, acoustic feature extractors, and transformer NLP models behind an intuitive real-time Flask web application.",
      dataset: "Comprehensive multimodal benchmark datasets covering manipulated facial imagery, synthesized audio speech clones, and diverse AI-generated vs. human textual corpora.",
      technologies: ["Python", "Flask", "EfficientNet-B0", "ResNet50", "ConvNeXt Tiny", "DistilBERT", "BiLSTM", "CNN-LSTM", "OpenCV", "Librosa"],
      methodology: "Acoustic analysis via MFCC, Mel Spectrogram, and Chroma extraction with hybrid CNN-LSTM networks. Image forensics via transfer learning on EfficientNet/ConvNeXt. Linguistic classification comparing BiLSTM with Attention and DistilBERT.",
      results: "Achieved 99.78% accuracy on audio deepfakes, 97.19% on manipulated images, and 97.00% on synthetic text detection with instant real/fake verdict in the unified web app."
    },
    githubUrl: "https://github.com/abdelrahmankarkar7-sys",
    liveUrl: null
  }
];

export const experienceData = [
  {
    title: "Freelance AI Engineer",
    organization: "Client Projects & Freelance Solutions",
    period: "Aug 2026 – Present",
    location: "Remote / Egypt",
    description: "Designing, building, and deploying tailored Machine Learning and Deep Learning solutions for clients with full lifecycle execution.",
    points: [
      "Delivered 3 end-to-end Machine Learning and Deep Learning projects for clients, implementing workflows spanning data preprocessing, feature engineering, model development, evaluation, and deployment.",
      "Developed AI solutions across 3 domains—Computer Vision, financial fraud detection, and multimodal AI-generated content detection—using Machine Learning and Deep Learning techniques.",
      "Collaborated directly with clients to define project requirements, manage timelines, and deliver end-to-end AI solutions."
    ]
  },
  {
    title: "AI & Machine Learning Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Microsoft Machine Learning Track",
    location: "Egypt",
    description: "Intensive government-sponsored initiative under MCIT focused on cutting-edge Machine Learning engineering, Microsoft technologies, and real-world AI pipelines.",
    points: [
      "Engaged in hands-on Machine Learning pipelines using Python, Scikit-learn, and cloud-enabled AI frameworks.",
      "Mastered end-to-end data preparation, exploratory data analysis (EDA), feature engineering, and model validation techniques.",
      "Built practical projects adhering to enterprise software standards and industry best practices."
    ]
  }
];

export const educationData = [
  {
    institution: "Delta University for Science and Technology, Egypt",
    degree: "B.Sc. in Artificial Intelligence and Data Science",
    period: "Sep 2023 – Jul 2027",
    details: "Comprehensive academic curriculum covering Advanced Machine Learning, Deep Neural Networks, Computer Vision, Data Structures & Algorithms, Database Systems, and Applied Mathematics for AI."
  }
];

export const languagesData = [
  { language: "Arabic", proficiency: "Native" },
  { language: "English", proficiency: "Intermediate" }
];

export const servicesData = [
  {
    id: "data-analysis",
    number: "01",
    title: "Data Analysis & Data Visualization",
    description: "I transform raw data into meaningful insights through data cleaning, exploratory data analysis, and visualization to help businesses make data-driven decisions.",
    features: [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization & Reporting",
      "Identifying Trends, Patterns & Insights"
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    id: "machine-learning",
    number: "02",
    title: "Machine Learning Solutions",
    description: "I develop machine learning models to solve real-world problems through predictive analytics, classification, and regression.",
    features: [
      "Classification & Regression Models",
      "Predictive Analytics",
      "Model Training & Evaluation",
      "Feature Engineering & Model Optimization"
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    id: "deep-learning-cv",
    number: "03",
    title: "Deep Learning & Computer Vision",
    description: "I develop deep learning models to analyze images and visual data, enabling AI-powered solutions for image recognition, classification, and object detection.",
    features: [
      "Image Classification & Recognition",
      "Object Detection",
      "CNN Model Development",
      "Image Preprocessing & Augmentation",
      "Model Training & Performance Evaluation"
    ],
    tools: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"]
  },
  {
    id: "deployment-web-apps",
    number: "04",
    title: "AI Model Deployment & Web Applications",
    description: "I turn machine learning models into interactive web applications that allow users to explore data and get AI-powered predictions.",
    features: [
      "ML Model Integration",
      "Interactive AI Applications",
      "Data Upload & Prediction Interfaces",
      "AI-Powered Dashboards"
    ],
    tools: ["Python", "Streamlit", "Scikit-learn"]
  }
];

