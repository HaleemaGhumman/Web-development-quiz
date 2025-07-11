import { Topic } from '.';

export const Mongodb: Topic = {
  topic: 'MongoDB',
  level: 'Intermediate',
  totalQuestions: 10,
  totalScore: 10,
  totalTime: 300,
  questions: [
    {
      question: 'What type of database is MongoDB?',
      choices: ['Relational', 'NoSQL', 'Graph', 'Key-Value'],
      type: 'MCQs',
      correctAnswers: ['NoSQL'],
      score: 1,
    },
    {
      question: 'Which data format is primarily used to store documents in MongoDB?',
      choices: ['XML', 'CSV', 'BSON', 'YAML'],
      type: 'MCQs',
      correctAnswers: ['BSON'],
      score: 1,
    },
    {
      question: 'Which command is used to insert a single document into a MongoDB collection?',
      choices: ['insertAll()', 'addOne()', 'insertOne()', 'save()'],
      type: 'MCQs',
      correctAnswers: ['insertOne()'],
      score: 1,
    },
    {
      question: 'What is a collection in MongoDB?',
      choices: [
        'A folder that holds databases',
        'A table with columns and rows',
        'A group of related documents',
        'A SQL query set',
      ],
      type: 'MCQs',
      correctAnswers: ['A group of related documents'],
      score: 1,
    },
    {
      question: 'Which method is used to update a document in MongoDB?',
      choices: ['modifyOne()', 'updateDocument()', 'updateOne()', 'changeOne()'],
      type: 'MCQs',
      correctAnswers: ['updateOne()'],
      score: 1,
    },
    {
      question: 'How do you delete multiple documents that match a condition in MongoDB?',
      choices: ['deleteAll()', 'remove()', 'deleteMany()', 'dropMany()'],
      type: 'MCQs',
      correctAnswers: ['deleteMany()'],
      score: 1,
    },
    {
      question: 'Which method retrieves all documents from a MongoDB collection?',
      choices: ['findAll()', 'fetch()', 'find()', 'getAll()'],
      type: 'MCQs',
      correctAnswers: ['find()'],
      score: 1,
    },
    {
      question: 'In MongoDB, what is the default unique identifier for a document?',
      choices: ['id', '_uid', '_id', 'mongo_id'],
      type: 'MCQs',
      correctAnswers: ['_id'],
      score: 1,
    },
    {
      question: 'What is an index used for in MongoDB?',
      choices: [
        'To connect collections',
        'To store large files',
        'To improve query performance',
        'To validate schema',
      ],
      type: 'MCQs',
      correctAnswers: ['To improve query performance'],
      score: 1,
    },
    {
      question:
        'Which operator is used in MongoDB queries to match documents where a field is greater than a value?',
      choices: ['$greater', '$gt', '$more', '$gte'],
      type: 'MCQs',
      correctAnswers: ['$gt'],
      score: 1,
    },
  ],
};
