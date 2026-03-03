import AIML from '../assets/course_logos/aiml.png'
import DS from '../assets/course_logos/ds.png'
import FullStack from '../assets/course_logos/full_stack.png'
import LLM from '../assets/course_logos/llm.png'
import NeuralNetwork from '../assets/course_logos/neural_network.png'
import Research from '../assets/course_logos/research.png'

export const programs = [
  {
    id: 'artificial-intelligence-machine-learning',
    icon: AIML,
    iconType: 'image',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Master the fundamentals of AI and ML to build intelligent systems that learn from data and make predictions.',
    duration: '12 Weeks',
    level: 'Intermediate',
    tag: 'Most Popular',
    price: '₹5,000',
    highlights: [
      'ML algorithms and models',
      'Supervised & unsupervised learning',
      'Real-world AI applications',
      'Industry-ready projects'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction to AI & ML',
        topics: ['AI fundamentals', 'ML concepts', 'Types of learning', 'Problem formulation']
      },
      {
        week: 2,
        title: 'Python for AI/ML',
        topics: ['NumPy for numerical computing', 'Pandas for data manipulation', 'Matplotlib & Seaborn', 'Scikit-learn basics']
      },
      {
        week: 3,
        title: 'Supervised Learning - Regression',
        topics: ['Linear regression', 'Polynomial regression', 'Ridge & Lasso', 'Model evaluation metrics']
      },
      {
        week: 4,
        title: 'Supervised Learning - Classification',
        topics: ['Logistic regression', 'Decision trees', 'Random forests', 'Support Vector Machines']
      },
      {
        week: 5,
        title: 'Unsupervised Learning',
        topics: ['K-means clustering', 'Hierarchical clustering', 'DBSCAN', 'Principal Component Analysis']
      },
      {
        week: 6,
        title: 'Feature Engineering & Selection',
        topics: ['Feature scaling', 'Encoding categorical data', 'Feature selection techniques', 'Dimensionality reduction']
      },
      {
        week: 7,
        title: 'Model Optimization',
        topics: ['Hyperparameter tuning', 'Cross-validation', 'Grid search', 'Regularization techniques']
      },
      {
        week: 8,
        title: 'Ensemble Methods',
        topics: ['Bagging', 'Boosting', 'XGBoost', 'Gradient boosting']
      },
      {
        week: 9,
        title: 'Neural Networks Basics',
        topics: ['Perceptron', 'Activation functions', 'Backpropagation', 'Training neural networks']
      },
      {
        week: 10,
        title: 'Computer Vision Basics',
        topics: ['Image processing', 'CNN introduction', 'Image classification', 'Object detection basics']
      },
      {
        week: 11,
        title: 'Natural Language Processing',
        topics: ['Text preprocessing', 'Word embeddings', 'Sentiment analysis', 'Text classification']
      },
      {
        week: 12,
        title: 'Capstone Project',
        topics: ['End-to-end ML pipeline', 'Model deployment', 'Documentation', 'Presentation']
      }
    ],
    prerequisites: ['Python programming basics', 'High school mathematics', 'Logical thinking'],
    outcomes: [
      'Build and train ML models',
      'Apply AI to real-world problems',
      'Optimize model performance',
      'Deploy ML solutions',
      'Pursue AI/ML career roles'
    ]
  },
  {
    id: 'deep-learning-neural-networks',
    icon: NeuralNetwork,
    iconType: 'image',
    title: 'Deep Learning and Neural Networks',
    description: 'Dive deep into neural networks, CNNs, RNNs, and transformers to build advanced AI applications.',
    duration: '14 Weeks',
    level: 'Advanced',
    tag: 'High Demand',
    price: '₹5,000',
    highlights: [
      'TensorFlow & PyTorch mastery',
      'CNN, RNN, LSTM, Transformers',
      'Computer vision & NLP',
      'GPU-accelerated training'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Deep Learning Fundamentals',
        topics: ['Neural network architecture', 'Activation functions', 'Loss functions', 'Optimization algorithms']
      },
      {
        week: 2,
        title: 'TensorFlow & Keras',
        topics: ['TensorFlow basics', 'Keras Sequential API', 'Functional API', 'Custom layers']
      },
      {
        week: 3,
        title: 'PyTorch Framework',
        topics: ['PyTorch tensors', 'Autograd', 'Building models', 'Training loops']
      },
      {
        week: 4,
        title: 'Convolutional Neural Networks',
        topics: ['CNN architecture', 'Convolution operations', 'Pooling layers', 'Famous CNN models']
      },
      {
        week: 5,
        title: 'Advanced Computer Vision',
        topics: ['Image classification', 'Object detection (YOLO, R-CNN)', 'Image segmentation', 'Transfer learning']
      },
      {
        week: 6,
        title: 'Recurrent Neural Networks',
        topics: ['RNN architecture', 'LSTM', 'GRU', 'Bidirectional RNNs']
      },
      {
        week: 7,
        title: 'Sequence Models',
        topics: ['Time series forecasting', 'Text generation', 'Machine translation', 'Attention mechanism']
      },
      {
        week: 8,
        title: 'Transformers Architecture',
        topics: ['Self-attention', 'Multi-head attention', 'Encoder-decoder', 'Positional encoding']
      },
      {
        week: 9,
        title: 'BERT and GPT Models',
        topics: ['BERT architecture', 'GPT models', 'Fine-tuning', 'Transfer learning']
      },
      {
        week: 10,
        title: 'Generative Models',
        topics: ['GANs', 'Variational Autoencoders', 'Diffusion models', 'Image generation']
      },
      {
        week: 11,
        title: 'Model Optimization',
        topics: ['Pruning', 'Quantization', 'Knowledge distillation', 'Mixed precision training']
      },
      {
        week: 12,
        title: 'Advanced NLP Applications',
        topics: ['Named entity recognition', 'Question answering', 'Text summarization', 'Chatbots']
      },
      {
        week: 13,
        title: 'Model Deployment',
        topics: ['ONNX format', 'TensorFlow Lite', 'Model serving', 'API integration']
      },
      {
        week: 14,
        title: 'Capstone Project',
        topics: ['Advanced DL application', 'Full pipeline', 'Optimization', 'Deployment']
      }
    ],
    prerequisites: ['Python proficiency', 'ML fundamentals', 'Linear algebra basics', 'Calculus knowledge'],
    outcomes: [
      'Master deep learning frameworks',
      'Build advanced CV and NLP systems',
      'Train transformer models',
      'Deploy DL applications',
      'Work as deep learning engineer'
    ]
  },
  {
    id: 'data-science-with-analysis',
    icon: DS,
    iconType: 'image',
    title: 'Data Science with Analysis',
    description: 'Learn to extract insights from data through statistical analysis, visualization, and predictive modeling.',
    duration: '10 Weeks',
    level: 'Beginner',
    tag: 'Trending',
    price: '₹5,000',
    highlights: [
      'Statistical analysis & hypothesis testing',
      'Data visualization mastery',
      'Exploratory data analysis',
      'Business intelligence tools'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Data Science',
        topics: ['Data science lifecycle', 'Python for data science', 'Jupyter notebooks', 'Data types']
      },
      {
        week: 2,
        title: 'Data Collection & Cleaning',
        topics: ['Data sources', 'Web scraping', 'APIs', 'Data cleaning techniques']
      },
      {
        week: 3,
        title: 'Exploratory Data Analysis',
        topics: ['Statistical summaries', 'Data distributions', 'Correlation analysis', 'Outlier detection']
      },
      {
        week: 4,
        title: 'Data Visualization',
        topics: ['Matplotlib advanced', 'Seaborn styling', 'Plotly interactive charts', 'Dashboard creation']
      },
      {
        week: 5,
        title: 'Statistical Analysis',
        topics: ['Descriptive statistics', 'Probability distributions', 'Hypothesis testing', 'A/B testing']
      },
      {
        week: 6,
        title: 'Predictive Analytics',
        topics: ['Regression analysis', 'Time series analysis', 'Forecasting methods', 'Trend analysis']
      },
      {
        week: 7,
        title: 'Business Intelligence',
        topics: ['SQL for data analysis', 'Tableau basics', 'Power BI', 'KPI development']
      },
      {
        week: 8,
        title: 'Advanced Analytics',
        topics: ['Customer segmentation', 'Cohort analysis', 'RFM analysis', 'Market basket analysis']
      },
      {
        week: 9,
        title: 'Big Data Introduction',
        topics: ['Big data concepts', 'Hadoop ecosystem', 'Spark basics', 'Data warehousing']
      },
      {
        week: 10,
        title: 'Data Science Project',
        topics: ['Business problem analysis', 'Data pipeline', 'Insights generation', 'Presentation']
      }
    ],
    prerequisites: ['Basic mathematics', 'Excel knowledge', 'Analytical mindset', 'No coding required'],
    outcomes: [
      'Analyze complex datasets',
      'Create compelling visualizations',
      'Perform statistical analysis',
      'Generate business insights',
      'Work as data analyst'
    ]
  },
  {
    id: 'full-stack-development',
    icon: FullStack,
    iconType: 'image',
    title: 'Full Stack Development',
    description: 'Build complete web applications from frontend to backend with modern frameworks and technologies.',
    duration: '12 Weeks',
    level: 'All Levels',
    tag: '',
    price: '₹5,000',
    highlights: [
      'MERN/MEAN stack development',
      'RESTful API design',
      'Database management',
      'Cloud deployment'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Web Fundamentals',
        topics: ['HTML5 semantic elements', 'CSS3 and Flexbox/Grid', 'JavaScript ES6+', 'Responsive design']
      },
      {
        week: 2,
        title: 'Advanced JavaScript',
        topics: ['Async programming', 'Promises & async/await', 'ES modules', 'Error handling']
      },
      {
        week: 3,
        title: 'React Framework',
        topics: ['React components', 'Hooks', 'State management', 'React Router']
      },
      {
        week: 4,
        title: 'Advanced React',
        topics: ['Context API', 'Redux', 'Performance optimization', 'Testing']
      },
      {
        week: 5,
        title: 'Node.js & Express',
        topics: ['Node.js fundamentals', 'Express framework', 'Middleware', 'Routing']
      },
      {
        week: 6,
        title: 'RESTful APIs',
        topics: ['API design', 'CRUD operations', 'Authentication', 'Error handling']
      },
      {
        week: 7,
        title: 'Database - MongoDB',
        topics: ['NoSQL concepts', 'MongoDB operations', 'Mongoose ODM', 'Database design']
      },
      {
        week: 8,
        title: 'Database - SQL',
        topics: ['Relational databases', 'MySQL/PostgreSQL', 'Joins', 'Transactions']
      },
      {
        week: 9,
        title: 'Authentication & Security',
        topics: ['JWT', 'OAuth', 'Bcrypt', 'CORS & CSRF']
      },
      {
        week: 10,
        title: 'Testing & DevOps',
        topics: ['Unit testing', 'Integration testing', 'Git', 'CI/CD']
      },
      {
        week: 11,
        title: 'Cloud Deployment',
        topics: ['AWS basics', 'Heroku', 'Docker', 'Environment management']
      },
      {
        week: 12,
        title: 'Full Stack Project',
        topics: ['E-commerce/social app', 'Full implementation', 'Deployment', 'Documentation']
      }
    ],
    prerequisites: ['Basic computer knowledge', 'Logical thinking', 'Passion for coding'],
    outcomes: [
      'Build full-stack applications',
      'Work with modern frameworks',
      'Design and implement APIs',
      'Deploy to cloud platforms',
      'Work as full-stack developer'
    ]
  },
  {
    id: 'large-language-models-llms',
    icon: LLM,
    iconType: 'image',
    title: 'Large Language Model [LLMs] Training and Deployment',
    description: 'Master the cutting-edge technology of LLMs including training, fine-tuning, and deployment of models like GPT and BERT.',
    duration: '16 Weeks',
    level: 'Advanced',
    tag: 'New',
    price: '₹5,000',
    highlights: [
      'GPT, BERT, T5 architectures',
      'Fine-tuning techniques',
      'Prompt engineering',
      'LLM deployment at scale'
    ],
    curriculum: [
      {
        week: 1,
        title: 'LLM Fundamentals',
        topics: ['History of LLMs', 'Transformer architecture', 'Attention mechanisms', 'Tokenization']
      },
      {
        week: 2,
        title: 'NLP Foundations',
        topics: ['Text preprocessing', 'Word embeddings', 'Sentence embeddings', 'Language modeling']
      },
      {
        week: 3,
        title: 'Pre-trained Models',
        topics: ['BERT architecture', 'GPT models', 'T5', 'RoBERTa']
      },
      {
        week: 4,
        title: 'Transfer Learning',
        topics: ['Fine-tuning strategies', 'Task-specific adaptation', 'Domain adaptation', 'Few-shot learning']
      },
      {
        week: 5,
        title: 'Hugging Face Ecosystem',
        topics: ['Transformers library', 'Datasets library', 'Tokenizers', 'Model hub']
      },
      {
        week: 6,
        title: 'Training LLMs',
        topics: ['Data preparation', 'Training pipeline', 'Distributed training', 'GPU optimization']
      },
      {
        week: 7,
        title: 'Fine-tuning Techniques',
        topics: ['Supervised fine-tuning', 'Parameter-efficient tuning', 'LoRA', 'Adapter layers']
      },
      {
        week: 8,
        title: 'Prompt Engineering',
        topics: ['Prompt design', 'In-context learning', 'Chain-of-thought', 'Prompt optimization']
      },
      {
        week: 9,
        title: 'Instruction Tuning',
        topics: ['Instruction datasets', 'InstructGPT', 'FLAN', 'RLHF']
      },
      {
        week: 10,
        title: 'LLM Applications',
        topics: ['Text generation', 'Question answering', 'Summarization', 'Code generation']
      },
      {
        week: 11,
        title: 'RAG Systems',
        topics: ['Retrieval-augmented generation', 'Vector databases', 'Semantic search', 'Context injection']
      },
      {
        week: 12,
        title: 'LLM Evaluation',
        topics: ['Benchmarks', 'Human evaluation', 'Bias detection', 'Safety measures']
      },
      {
        week: 13,
        title: 'Model Optimization',
        topics: ['Quantization', 'Pruning', 'Knowledge distillation', 'Inference optimization']
      },
      {
        week: 14,
        title: 'Deployment Strategies',
        topics: ['API development', 'Model serving', 'Load balancing', 'Cost optimization']
      },
      {
        week: 15,
        title: 'LangChain & Tools',
        topics: ['LangChain framework', 'Agents', 'Memory systems', 'Tool integration']
      },
      {
        week: 16,
        title: 'Capstone Project',
        topics: ['Custom LLM application', 'Fine-tuning', 'Deployment', 'Production-ready system']
      }
    ],
    prerequisites: ['Deep learning knowledge', 'Python proficiency', 'PyTorch/TensorFlow', 'NLP basics'],
    outcomes: [
      'Train and fine-tune LLMs',
      'Build LLM-powered applications',
      'Deploy models at scale',
      'Master prompt engineering',
      'Work as LLM engineer'
    ]
  },
  {
    id: 'research-conference-program',
    icon: Research,
    iconType: 'image',
    title: 'Research & Conference Program',
    description: 'Conduct original research in AI/ML and publish papers in international conferences and journals.',
    duration: '24 Weeks',
    level: 'Advanced',
    tag: 'Research',
    price: '₹5,000',
    highlights: [
      'Research methodology',
      'Paper writing & publication',
      'Conference presentation',
      'Peer review process'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Research Fundamentals',
        topics: ['Research methodology', 'Literature review', 'Research questions', 'Hypothesis formation']
      },
      {
        week: 2,
        title: 'Paper Reading',
        topics: ['Reading research papers', 'Critical analysis', 'Citation management', 'Research databases']
      },
      {
        week: 3,
        title: 'Research Areas in AI',
        topics: ['Computer vision', 'NLP', 'Reinforcement learning', 'Explainable AI']
      },
      {
        week: 4,
        title: 'Problem Identification',
        topics: ['Gap analysis', 'Novel contributions', 'Research scope', 'Feasibility study']
      },
      {
        week: 5,
        title: 'Experimental Design',
        topics: ['Methodology selection', 'Dataset selection', 'Baseline models', 'Evaluation metrics']
      },
      {
        week: 6,
        title: 'Implementation - Phase 1',
        topics: ['Environment setup', 'Data preprocessing', 'Model development', 'Initial experiments']
      },
      {
        week: 7,
        title: 'Implementation - Phase 2',
        topics: ['Model refinement', 'Hyperparameter tuning', 'Ablation studies', 'Result analysis']
      },
      {
        week: 8,
        title: 'Statistical Analysis',
        topics: ['Statistical significance', 'Hypothesis testing', 'Error analysis', 'Visualization']
      },
      {
        week: 9,
        title: 'Paper Writing - Introduction',
        topics: ['Writing introduction', 'Problem statement', 'Contributions', 'Paper structure']
      },
      {
        week: 10,
        title: 'Paper Writing - Related Work',
        topics: ['Literature survey', 'Categorization', 'Gap identification', 'Positioning work']
      },
      {
        week: 11,
        title: 'Paper Writing - Methodology',
        topics: ['Describing approach', 'Technical details', 'Algorithms', 'Architecture diagrams']
      },
      {
        week: 12,
        title: 'Paper Writing - Results',
        topics: ['Presenting results', 'Tables and figures', 'Comparison with baselines', 'Discussion']
      },
      {
        week: 13,
        title: 'Paper Writing - Conclusion',
        topics: ['Summary', 'Future work', 'Limitations', 'Broader impact']
      },
      {
        week: 14,
        title: 'Academic Writing Skills',
        topics: ['Scientific writing', 'Grammar', 'Clarity', 'Conciseness']
      },
      {
        week: 15,
        title: 'Conference Selection',
        topics: ['Top-tier conferences', 'Acceptance rates', 'Submission guidelines', 'Review process']
      },
      {
        week: 16,
        title: 'Paper Submission',
        topics: ['Formatting', 'Supplementary material', 'LaTeX', 'Submission process']
      },
      {
        week: 17,
        title: 'Peer Review',
        topics: ['Review process', 'Responding to reviews', 'Rebuttal writing', 'Revision']
      },
      {
        week: 18,
        title: 'Presentation Skills',
        topics: ['Creating slides', 'Oral presentation', 'Poster design', 'Q&A handling']
      },
      {
        week: 19,
        title: 'Camera-Ready Preparation',
        topics: ['Final revisions', 'Copyright', 'Camera-ready format', 'Final submission']
      },
      {
        week: 20,
        title: 'Conference Preparation',
        topics: ['Presentation rehearsal', 'Networking', 'Conference etiquette', 'Travel planning']
      },
      {
        week: 21,
        title: 'Open Source Contribution',
        topics: ['Code release', 'Documentation', 'GitHub repository', 'Community engagement']
      },
      {
        week: 22,
        title: 'Journal Publication',
        topics: ['Journal vs conference', 'Extended version', 'Journal submission', 'Review process']
      },
      {
        week: 23,
        title: 'Research Ethics',
        topics: ['Plagiarism', 'Data ethics', 'Reproducibility', 'Collaboration']
      },
      {
        week: 24,
        title: 'Career in Research',
        topics: ['PhD applications', 'Research positions', 'Grant writing', 'Building research profile']
      }
    ],
    prerequisites: ['Masters/Bachelors in CS/related field', 'Strong ML background', 'Programming skills', 'Academic writing interest'],
    outcomes: [
      'Publish in top-tier conferences',
      'Master research methodology',
      'Build research portfolio',
      'Network with researchers',
      'Pursue PhD or research career'
    ]
  }
];