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
  avatar: "/assets/profile.jpg",
  cvPath: "/assets/Abd-El-Rahman-Karkar-CV.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/abd-el-rhaman-karkar",
    github: "https://github.com/abdelrahmankarkar7-sys",
    email: "mailto:abdelrahmankarkar7@gmail.com",
  },
  stats: [
    { label: "Data Records Processed", value: "50,000+" },
    { label: "MRI Scans Analyzed", value: "3,000+" },
    { label: "Multimodal Samples", value: "2,000+" },
    { label: "Peak Model Accuracy", value: "~92%" },
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
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
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
    id: "banking-fraud-detection",
    title: "Banking Fraud Detection & Loan Repayment Prediction",
    category: "Machine Learning",
    tags: ["Machine Learning", "Scikit-learn", "XGBoost", "Feature Engineering", "Python", "Finance"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Robust financial ML system evaluating 50,000+ transactions to identify fraudulent activity and assess credit repayment probability.",
    keyMetrics: [
      { label: "Accuracy", value: "~90%" },
      { label: "Dataset Size", value: "50,000+ Records" },
      { label: "Metrics", value: "Precision & Recall" }
    ],
    highlights: [
      "Trained and validated fraud detection models using 50,000+ transaction records, achieving approximately 90% classification accuracy.",
      "Addressed class imbalance and assessed fraud detection model performance using precision, recall, and F1-score to ensure reliable results beyond accuracy alone.",
      "Built a loan repayment prediction component using financial data and applied feature engineering to prepare input variables for predictive modeling."
    ],
    details: {
      problem: "Financial institutions lose billions to fraudulent transactions each year. Detecting illicit patterns among millions of legitimate transactions requires overcoming extreme data imbalance without increasing false alarms.",
      solution: "Built a high-precision ML framework leveraging gradient-boosted decision trees (XGBoost) and specialized feature engineering to identify fraud patterns and forecast borrower loan repayment probabilities.",
      dataset: "50,000+ financial transactions and applicant credit records featuring transactional attributes and temporal spending behaviors.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Seaborn"],
      methodology: "Addressed extreme class skew using balanced class weights and threshold tuning. Engineered transaction velocity and spending deviation metrics. Evaluated via ROC-AUC, precision-recall curves, and F1-score.",
      results: "Attained ~90% accuracy with high precision and recall, minimizing financial exposure and unnecessary transaction declines."
    },
    githubUrl: "https://github.com/abdelrahmankarkar7-sys",
    liveUrl: null
  },
  {
    id: "ai-generated-content-detection",
    title: "Multimodal AI-Generated Content Detection System",
    category: "Deep Learning",
    tags: ["Deep Learning", "Multimodal AI", "Flask", "XGBoost", "Python", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Multimodal AI detection pipeline capable of identifying synthetic media across images, audio, and text with real-time Flask API predictions.",
    keyMetrics: [
      { label: "Accuracy", value: "~85%" },
      { label: "Content Types", value: "Image, Audio, Text" },
      { label: "Dataset Size", value: "2,000+ Samples" }
    ],
    highlights: [
      "Engineered a multimodal AI-generated content detection pipeline processing 2,000+ image, audio, and text samples, achieving approximately 85% classification accuracy.",
      "Combined modality-specific feature extraction across 3 content types—image, audio, and text—within a unified classification workflow.",
      "Packaged the multimodal detection pipeline behind a Flask API supporting real-time prediction across 3 input modalities: image, audio, and text."
    ],
    details: {
      problem: "The rapid evolution of Generative AI tools (GANs, Diffusion, LLMs, Voice Cloners) has led to widespread deepfakes and automated disinformation. Isolated single-modality detectors fail when faced with heterogeneous digital media.",
      solution: "Engineered a unified multimodal defense architecture that extracts modality-specific artifacts (spectral noise for audio, latent distributions for text, pixel residuals for imagery) with a centralized Flask API endpoint.",
      dataset: "2,000+ curated synthetic and authentic samples spanning images, audio clips, and textual excerpts.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "Flask", "OpenCV", "NumPy"],
      methodology: "Processed images via frequency analysis and spatial residuals, extracted acoustic MFCCs and spectral contrast, and quantified text perplexity. Combined features into an ensemble classifier.",
      results: "Achieved ~85% overall multimodal accuracy with sub-second inference response across all three content modalities."
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
