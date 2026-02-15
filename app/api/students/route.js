// app/api/students/route.js

export async function GET() {
  const students = [
    { id: 1, name: "Abhishek", class: "BCA", attendance: 85 },
    { id: 2, name: "Rahul", class: "BCA", attendance: 78 },
    { id: 3, name: "Sneha", class: "BCA", attendance: 92 },
  ];

  return Response.json(students);
}
