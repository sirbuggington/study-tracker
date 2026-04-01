import type { StudyPlan } from './types';

export const studyPlan: StudyPlan = {
  title: "Application Developer Study Plan",
  goal: "Become interview-credible for a junior Application Developer role on the Microsoft stack: C#, SQL Server, ASP.NET, Blazor, Visual Studio",
  startDate: "2026-03-31",
  endDate: "2026-04-18",
  dailyQuestion: "Did I produce a working artifact or increase my ability to explain the system clearly?",
  coreRules: [
    "The project matters more than the courses.",
    "Use EF Core from the start. Do not rewrite data access later.",
    "Do not add an API layer unless the base app is already working cleanly.",
    "Sundays are off. No fake \"light study.\"",
    "Use AI to explain and unblock, not to do all the thinking for you."
  ],
  completionCriteria: "I built a CRUD application using Blazor Server, Entity Framework Core, and SQL Server — and here's the GitHub repo to prove it.",
  courseReference: [
    { number: 1, name: "Get started with C#, Part 1", hours: "~6 hrs", link: "https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/" },
    { number: 2, name: "Query and modify data with T-SQL", hours: "~6 hrs", link: "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/" },
    { number: 3, name: "Build web apps with ASP.NET Core for beginners", hours: "~5 hrs", link: "https://learn.microsoft.com/en-us/training/paths/aspnet-core-web-app/" },
    { number: 4, name: "Build web apps with Blazor", hours: "~5 hrs", link: "https://learn.microsoft.com/en-us/training/paths/build-web-apps-with-blazor/" },
    { number: 5, name: "Implement classes, properties, and methods", hours: "~4 hrs", link: "https://learn.microsoft.com/en-us/training/paths/implement-classes-properties-and-methods/" },
    { number: 6, name: "Create a web API with ASP.NET Core controllers", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/" },
    { number: 7, name: "Entity Framework Core", hours: "~3-4 hrs", link: "https://learn.microsoft.com/en-us/ef/core/" },
    { number: 8, name: "Debug .NET apps with Visual Studio", hours: "~1 hr", link: "https://learn.microsoft.com/en-us/training/modules/dotnet-debug-visual-studio/" },
    { number: 9, name: "GitHub Foundations", hours: "~4 hrs", link: "https://learn.microsoft.com/en-us/training/paths/github-foundations/" },
    { number: 10, name: "MDN JavaScript basics (optional)", hours: "~3-4 hrs", link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting" }
  ],
  weeks: [
    {
      id: "week-1",
      weekNumber: 1,
      title: "WEEK 1 — Foundation",
      subtitle: "Learn the core stack fast, then move into building.",
      days: [
        {
          id: "day-1",
          dayNumber: 1,
          date: "March 31",
          weekday: "Tuesday",
          title: "First contact with C#",
          subtitle: "Day 1",
          isRestDay: false,
          mustFinish: [
            { id: "d1-m1", text: "Complete C# Part 1, Modules 1-3", link: "https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/" },
            { id: "d1-m2", text: "Type all examples yourself — do not copy/paste" },
            { id: "d1-m3", text: "Write 5-10 bullet-point recap from memory (no peeking)" }
          ],
          niceToFinish: [
            { id: "d1-n1", text: "Start Module 4 — Number operations" },
            { id: "d1-n2", text: "Open a blank console app and intentionally break things to see what errors look like" }
          ],
          endOfDayProof: "You can explain what a variable is, what a string is, and how to print to the screen — without looking at notes."
        },
        {
          id: "day-2",
          dayNumber: 2,
          date: "April 1",
          weekday: "Wednesday",
          title: "Finish C# foundations",
          subtitle: "Day 2",
          isRestDay: false,
          mustFinish: [
            { id: "d2-m1", text: "Complete C# Part 1, Modules 4-6" },
            { id: "d2-m2", text: "Finish both guided projects (student grades + GPA calculator)" },
            { id: "d2-m3", text: "Build one tiny extra console app yourself (tip calculator, unit converter, calorie counter — anything)" },
            { id: "d2-m4", text: "Write 5-10 bullet-point recap from memory" }
          ],
          niceToFinish: [
            { id: "d2-n1", text: "Rebuild one guided project from scratch without following the instructions" }
          ],
          endOfDayProof: "You can write a basic C# console program on your own without copying line by line. Entire C# Part 1 path is complete — green checkmarks on all 6 modules."
        },
        {
          id: "day-3",
          dayNumber: 3,
          date: "April 2",
          weekday: "Thursday",
          title: "SQL, first half",
          subtitle: "Day 3",
          isRestDay: false,
          mustFinish: [
            { id: "d3-m1", text: "Complete T-SQL, Modules 1-3", link: "https://learn.microsoft.com/en-us/training/paths/get-started-querying-with-transact-sql/" },
            { id: "d3-m2", text: "Practice: SELECT, WHERE, ORDER BY, JOIN" },
            { id: "d3-m3", text: "Write 5-10 bullet-point recap from memory" }
          ],
          niceToFinish: [
            { id: "d3-n1", text: "Open SSMS and run a few queries against any local database" },
            { id: "d3-n2", text: "Write 5 practice queries on your own sample tables" },
            { id: "d3-n3", text: "Start Module 4 — Subqueries" }
          ],
          endOfDayProof: "You can explain what a JOIN does and write a basic join query yourself without looking anything up."
        },
        {
          id: "day-4",
          dayNumber: 4,
          date: "April 3",
          weekday: "Friday",
          title: "SQL, finish it",
          subtitle: "Day 4",
          isRestDay: false,
          mustFinish: [
            { id: "d4-m1", text: "Complete T-SQL, Modules 4-6" },
            { id: "d4-m2", text: "Practice: subqueries, GROUP BY, INSERT, UPDATE, DELETE" },
            { id: "d4-m3", text: "Write 5-10 bullet-point recap from memory" }
          ],
          niceToFinish: [
            { id: "d4-n1", text: "Read through the EF Core Getting Started page", link: "https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app" },
            { id: "d4-n2", text: "Write a few INSERT/UPDATE/DELETE statements in SSMS against a test table" }
          ],
          endOfDayProof: "You can do basic SQL CRUD without looking up every command. Entire T-SQL path is complete."
        },
        {
          id: "day-5",
          dayNumber: 5,
          date: "April 4",
          weekday: "Saturday",
          title: "Web frameworks marathon",
          subtitle: "Day 5",
          isRestDay: false,
          mustFinish: [
            { id: "d5-m1", text: "Complete all modules of ASP.NET Core for beginners", link: "https://learn.microsoft.com/en-us/training/paths/aspnet-core-web-app/" },
            { id: "d5-m2", text: "Complete Blazor, Modules 1-4 (Intro, First app, To-do list, Data interaction)", link: "https://learn.microsoft.com/en-us/training/paths/build-web-apps-with-blazor/" },
            { id: "d5-m3", text: "Write 5-10 bullet-point recap from memory" }
          ],
          niceToFinish: [
            { id: "d5-n1", text: "Continue into Blazor Modules 5-6 (Routing, Forms/validation)" },
            { id: "d5-n2", text: "Write a one-paragraph summary: What is ASP.NET? What is Blazor? How do they relate?" },
            { id: "d5-n3", text: "Open a fresh Blazor Server project in Visual Studio and inspect the file structure" }
          ],
          endOfDayProof: "You can explain what ASP.NET Core is, what Blazor is, and how they relate. You've built a to-do list in Blazor."
        },
        {
          id: "day-6",
          dayNumber: 6,
          date: "April 5",
          weekday: "Sunday",
          title: "REST DAY",
          subtitle: "Day 6",
          isRestDay: true,
          mustFinish: [],
          niceToFinish: [],
          endOfDayProof: "Go outside. Hike Sunset Rock. Do literally anything that isn't a screen. The proof is that you actually took the day off."
        }
      ]
    },
    {
      id: "week-2",
      weekNumber: 2,
      title: "WEEK 2 — Build the Project + Fill Gaps",
      subtitle: "Finish Blazor, then build the real app. Everything else gets layered in through the project.",
      days: [
        {
          id: "day-7",
          dayNumber: 7,
          date: "April 6",
          weekday: "Monday",
          title: "Finish Blazor, start the project",
          subtitle: "Day 7",
          isRestDay: false,
          mustFinish: [
            { id: "d7-m1", text: "Complete Blazor, Modules 5-9 (Routing, Forms, JS interop, Razor class libs, Connect Four)", link: "https://learn.microsoft.com/en-us/training/paths/build-web-apps-with-blazor/" },
            { id: "d7-m2", text: "Create a new Blazor Server project in Visual Studio called \"WorkOrderTracker\"" },
            { id: "d7-m3", text: "Install EF Core NuGet packages" },
            { id: "d7-m4", text: "Create your first two model classes: WorkOrder and Category" },
            { id: "d7-m5", text: "Run your first EF Core migration and verify the tables exist in SQL Server" },
            { id: "d7-m6", text: "Get a basic page that reads from the database (even if it's empty)" }
          ],
          niceToFinish: [
            { id: "d7-n1", text: "Seed a few categories and work orders into the database" },
            { id: "d7-n2", text: "Wire up the list page to display real data" }
          ],
          endOfDayProof: "The Blazor path is 100% done. Your app runs and displays real database data. EF Core created your tables successfully."
        },
        {
          id: "day-8",
          dayNumber: 8,
          date: "April 7",
          weekday: "Tuesday",
          title: "Full CRUD — the most important day of the entire plan",
          subtitle: "Day 8",
          isRestDay: false,
          mustFinish: [
            { id: "d8-m1", text: "List page — displays all work orders from the database" },
            { id: "d8-m2", text: "Create form — saves a new work order to the database" },
            { id: "d8-m3", text: "Edit form — updates an existing work order" },
            { id: "d8-m4", text: "Delete button — removes a work order" },
            { id: "d8-m5", text: "Category dropdown — pulls from the Category table" },
            { id: "d8-m6", text: "Basic validation — required fields, reasonable field lengths" }
          ],
          niceToFinish: [
            { id: "d8-n1", text: "Add a Status field (Open, In Progress, Closed)" },
            { id: "d8-n2", text: "Add a Created Date that auto-fills when a record is created" },
            { id: "d8-n3", text: "Improve field names and page titles" }
          ],
          endOfDayProof: "You can create a work order, see it in the list, edit it, and delete it. All four operations work without crashing. Data flows from form to EF Core to SQL Server to back to screen."
        },
        {
          id: "day-9",
          dayNumber: 9,
          date: "April 8",
          weekday: "Wednesday",
          title: "OOP concepts + project cleanup",
          subtitle: "Day 9",
          isRestDay: false,
          mustFinish: [
            { id: "d9-m1", text: "Complete \"Implement classes, properties, and methods\" path (~4 hrs)", link: "https://learn.microsoft.com/en-us/training/paths/implement-classes-properties-and-methods/" },
            { id: "d9-m2", text: "Go back into your project and clean up your model classes using what you learned" },
            { id: "d9-m3", text: "Add proper access modifiers (public/private) where they make sense" }
          ],
          niceToFinish: [
            { id: "d9-n1", text: "Add a simple service class between your pages and EF Core (only if the code is getting messy)" },
            { id: "d9-n2", text: "Add a Status enum: Open / In Progress / Closed" },
            { id: "d9-n3", text: "Add a constructor to WorkOrder that sets default values" },
            { id: "d9-n4", text: "Refactor duplicate code into reusable methods" }
          ],
          endOfDayProof: "You understand your own model classes instead of treating them like magic objects. You can explain what a class, property, and method are using your own project as the example."
        },
        {
          id: "day-10",
          dayNumber: 10,
          date: "April 9",
          weekday: "Thursday",
          title: "EF Core deep dive + search/filter",
          subtitle: "Day 10",
          isRestDay: false,
          mustFinish: [
            { id: "d10-m1", text: "Read/practice EF Core docs: Relationships, Querying, Saving Data, Migrations", link: "https://learn.microsoft.com/en-us/ef/core/" },
            { id: "d10-m2", text: "Add search to your work order list (search by title)" },
            { id: "d10-m3", text: "Add filter by Status (show only Open, only Closed, etc.)" },
            { id: "d10-m4", text: "Add at least one sort option (by date, status, or title)" }
          ],
          niceToFinish: [
            { id: "d10-n1", text: "Add filter by Category" },
            { id: "d10-n2", text: "Add a detail view page for a single work order" },
            { id: "d10-n3", text: "Add a \"Last Modified\" date that updates on edit" },
            { id: "d10-n4", text: "Clean up your LINQ queries" }
          ],
          endOfDayProof: "Your app has working search and at least one filter. You can explain how EF Core maps your models to tables and how a LINQ query reaches the database."
        },
        {
          id: "day-11",
          dayNumber: 11,
          date: "April 10",
          weekday: "Friday",
          title: "Debugging + API concepts",
          subtitle: "Day 11",
          isRestDay: false,
          mustFinish: [
            { id: "d11-m1", text: "Complete \"Debug .NET apps with Visual Studio\" module (~1 hr)", link: "https://learn.microsoft.com/en-us/training/modules/dotnet-debug-visual-studio/" },
            { id: "d11-m2", text: "Set breakpoints in your project and step through a create flow" },
            { id: "d11-m3", text: "Set breakpoints in your project and step through an update flow" },
            { id: "d11-m4", text: "Find and fix at least 2 real bugs or edge cases in your app" },
            { id: "d11-m5", text: "Complete \"Create a web API with ASP.NET Core controllers\" module (~1 hr) — learn the concept only", link: "https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/" }
          ],
          niceToFinish: [
            { id: "d11-n1", text: "Practice explaining one bug fix out loud like an interview answer" },
            { id: "d11-n2", text: "Find and fix 1-2 more edge cases (empty inputs, special characters, etc.)" }
          ],
          endOfDayProof: "You can step through a create/update flow in the debugger and understand what's happening at each line. You can explain what an API controller is, even if you didn't add one to your project."
        },
        {
          id: "day-12",
          dayNumber: 12,
          date: "April 11",
          weekday: "Saturday",
          title: "Git + project polish",
          subtitle: "Day 12",
          isRestDay: false,
          mustFinish: [
            { id: "d12-m1", text: "Complete first half of GitHub Foundations path (~4 hrs)", link: "https://learn.microsoft.com/en-us/training/paths/github-foundations/" },
            { id: "d12-m2", text: "Create a GitHub repo for your Work Order Tracker" },
            { id: "d12-m3", text: "Push your project to GitHub" },
            { id: "d12-m4", text: "Write a README.md (what the app does, tech used, how to run it)" },
            { id: "d12-m5", text: "Confirm all CRUD actions still work" }
          ],
          niceToFinish: [
            { id: "d12-n1", text: "Create a branch, make a small change, merge it back (practice the workflow)" },
            { id: "d12-n2", text: "Clean up the UI — consistent spacing, readable layout" },
            { id: "d12-n3", text: "Review code top to bottom and rename anything confusingly named" }
          ],
          endOfDayProof: "Someone else could open the repo and understand what the app is and how to run it."
        },
        {
          id: "day-13",
          dayNumber: 13,
          date: "April 12",
          weekday: "Sunday",
          title: "REST DAY",
          subtitle: "Day 13",
          isRestDay: true,
          mustFinish: [],
          niceToFinish: [],
          endOfDayProof: "Same as last Sunday. No fake \"light study.\" Recharge — you're entering the home stretch."
        }
      ]
    },
    {
      id: "week-3",
      weekNumber: 3,
      title: "WEEK 3 — Polish and Prepare",
      subtitle: "Make it demoable, then make it explainable.",
      days: [
        {
          id: "day-14",
          dayNumber: 14,
          date: "April 13",
          weekday: "Monday",
          title: "Harden the project",
          subtitle: "Day 14",
          isRestDay: false,
          mustFinish: [
            { id: "d14-m1", text: "Test every path: create, read, update, delete, search, filter" },
            { id: "d14-m2", text: "Handle at least 2 edge cases (empty fields, very long text, deleting a category that has work orders)" },
            { id: "d14-m3", text: "Make sure no action crashes the app with an unhandled error" },
            { id: "d14-m4", text: "Add created date and last modified date if not already done" }
          ],
          niceToFinish: [
            { id: "d14-n1", text: "Add pagination if the list could get long" },
            { id: "d14-n2", text: "Add a confirmation dialog before deleting (\"Are you sure?\")" },
            { id: "d14-n3", text: "Improve validation messages" }
          ],
          endOfDayProof: "Your app is no longer just a demo — it survives normal mistakes and bad input gracefully."
        },
        {
          id: "day-15",
          dayNumber: 15,
          date: "April 14",
          weekday: "Tuesday",
          title: "Code review + final polish",
          subtitle: "Day 15",
          isRestDay: false,
          mustFinish: [
            { id: "d15-m1", text: "Review your code top to bottom — prefer clear naming over comments" },
            { id: "d15-m2", text: "Make sure EF Core migrations are clean (no junk migrations)" },
            { id: "d15-m3", text: "Full retest of every feature" },
            { id: "d15-m4", text: "Push final code to GitHub" }
          ],
          niceToFinish: [
            { id: "d15-n1", text: "Skim MDN JavaScript Modules 1-3 (variables, functions, events)", link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting" },
            { id: "d15-n2", text: "Add one more small feature (assigned-to field, priority level, due date, notes)" }
          ],
          endOfDayProof: "You can navigate the whole codebase without feeling lost. The code reads clearly without heavy comments. The project is stable enough to demo."
        },
        {
          id: "day-16",
          dayNumber: 16,
          date: "April 15",
          weekday: "Wednesday",
          title: "Interview preparation",
          subtitle: "Day 16",
          isRestDay: false,
          mustFinish: [
            { id: "d16-m1", text: "Practice a 2-minute walkthrough of your project out loud" },
            { id: "d16-m2", text: "Practice explaining your database schema (tables, relationships, why you structured it that way)" },
            { id: "d16-m3", text: "Practice explaining a CRUD flow (user clicks create -> form validates -> EF Core saves -> list refreshes)" },
            { id: "d16-m4", text: "Practice explaining what EF Core does and why you used it" },
            { id: "d16-m5", text: "Practice explaining a debugging story (how you found and fixed a real bug using breakpoints)" },
            { id: "d16-m6", text: "Map your skills to every bullet point on the job listing — write down how you'd answer each one" },
            { id: "d16-m7", text: "Write 2-3 questions you'd ask the hiring manager about their tech environment" }
          ],
          niceToFinish: [
            { id: "d16-n1", text: "Record yourself doing the project walkthrough and watch it back" },
            { id: "d16-n2", text: "Research Hamilton County IT department or similar local government IT environments" }
          ],
          endOfDayProof: "You can talk through the project clearly without AI helping. You can answer \"Tell me about a project you built\" without hesitating."
        },
        {
          id: "day-17-19",
          dayNumber: 17,
          date: "April 16-18",
          weekday: "Thu-Sat",
          title: "Overflow — pick the highest-need area only",
          subtitle: "Days 17-19",
          isRestDay: false,
          mustFinish: [
            { id: "d17-m1", text: "Pick one main priority and focus: revisit weak material, add a feature, practice Git, do a mock interview, or prepare applications" }
          ],
          niceToFinish: [
            { id: "d17-n1", text: "Add a lightweight reporting page" },
            { id: "d17-n2", text: "Add an \"Assigned To\" field" },
            { id: "d17-n3", text: "Try Azure deployment if you have capacity" },
            { id: "d17-n4", text: "Research other local government IT roles in Chattanooga" }
          ],
          endOfDayProof: "The app is better in one meaningful way, not ten tiny half-finished ways. Or you are materially better at explaining it."
        }
      ]
    }
  ]
};
