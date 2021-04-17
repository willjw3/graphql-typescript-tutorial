import { DataSource } from 'apollo-datasource';
import { DataSourceConfig, project } from '../types';

class ProjectAPI extends DataSource {
    store: any;
    context: any;

    constructor({ store }:{ store: any}) {
        super();
        this.store = store;
    }

    initialize(config: DataSourceConfig) {
        this.context = config.context;
    }

    getProjects = async () => {
        const result = await this.store.project.findMany({
            include: { members: { include: { user: true } } },
          })
          const allProjects = result.map((project: project) => {
            return { ...project, members: project.members.map(assignment => assignment.user) }
          })
        return allProjects
    }
}

export default ProjectAPI;