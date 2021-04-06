import db from '../models'
import { users } from '../seeders/users';
import { projects } from '../seeders/projects';
import { assignments } from '../seeders/assignments';

export const createUsers = () => {
    users.map(user => {
        db.User.create(user);
    })
}
export const createProjects = () => {
    projects.map(project => {
        db.Project.create(project);
    })
}
export const createAssignments = () => {
    assignments.map(assignment => {
        db.ProjectAssignment.create(assignment);
    })
}

interface project {
    id: number;
    title: string;
    status: string;
}

interface user {
    id: string;
    name: string;
    email: string;
    Projects: project []
}

export const getUsers = async (): Promise<user[]> => {
    const userdata = await db.User.findAll({
        include: {
            model: db.Project,
            through: {
                attributes: []
            }
        }
    });
    const users = await userdata.map((user: user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            projects: user.Projects
        }
    })
    return users
}

