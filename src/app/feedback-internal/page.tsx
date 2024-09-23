"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Search, SortAsc, SortDesc } from "lucide-react";

// Mock data for demonstration
const mockFeedback = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    type: "Bug Report",
    message: "App crashes on startup",
    date: "2023-06-01",
    status: "New",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    type: "Feature Request",
    message: "Add dark mode",
    date: "2023-06-02",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    type: "General",
    message: "Great app, love using it!",
    date: "2023-06-03",
    status: "Resolved",
  },
  // Add more mock data as needed
];

export default function InternalFeedbackDashboard() {
  const [feedbackList, setFeedbackList] = useState(mockFeedback);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (value: string) => {
    setFilterType(value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredAndSortedFeedback = feedbackList
    .filter(
      (feedback) =>
        (filterType === "All" || feedback.type === filterType) &&
        (feedback.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          feedback.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          feedback.message.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1
        className="mb-8 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Feedback Dashboard
      </motion.h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Feedback Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by name, email, or content"
                  className="pl-8"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="filter">Filter by Type</Label>
              <Select onValueChange={handleFilterChange}>
                <SelectTrigger id="filter">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Bug Report">Bug Report</SelectItem>
                  <SelectItem value="Feature Request">
                    Feature Request
                  </SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Sort by Date</Label>
              <Button onClick={handleSort} variant="outline" className="w-full">
                {sortOrder === "asc" ? (
                  <SortAsc className="mr-2 h-4 w-4" />
                ) : (
                  <SortDesc className="mr-2 h-4 w-4" />
                )}
                {sortOrder === "asc" ? "Oldest First" : "Newest First"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedFeedback.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell>{feedback.date}</TableCell>
                  <TableCell>{feedback.name}</TableCell>
                  <TableCell>{feedback.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        feedback.type === "Bug Report"
                          ? "destructive"
                          : feedback.type === "Feature Request"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {feedback.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge>{feedback.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
