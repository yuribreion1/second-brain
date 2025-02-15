---
sidebar_position: 2
---

# GitHub Foundations

## Introduction to Git

### What is version control?

A version control system (VCS) is a program or set of programs that tracks changes to a collection of files. With the goal to easily recall earlier versions of individual files or of the entire project.

Another name for a VCS is software configuration management (SCM). VCS is one of the practices involved in SCM.

Instances of VCS used a centralized server to store a project history. This centralization meant that the one server was also potentially a single point of failure.

**Git is distributed**, which means that a project's complete history is stored both on the client and on the server.

### Git terminology

- **Working tree**: The set of nested directories and files that contain the project thatÄs being worked on.
- **Hash**: Git uses hashes that are 160 bits long, to identify if a file has changed or not. If the file timestamp is changed, but the file hash isn't changed, Git knowns the file contents aren't changed.
- **Object**: A Git repo contains four types of objects:
  - A blob object that contains an ordinary file.
  - A tree object represents a directory.
  - A commit object represents a specific version of the working tree.
  - A tag is a name attached to a commit.
- **Branch**: Is a named series of linked commits. The most recent commit of a branch is called the _head_.

### Git and GitHub

As mentioned previously, Git is a distributed version control system (DVCS). GitHub is a cloud platform that uses Git as its core technology, that acts as the remote repository.
