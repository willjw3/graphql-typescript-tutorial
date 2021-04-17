import { DataSource } from 'apollo-datasource';
import { DataSourceConfig, user } from '../types';

class UserAPI extends DataSource {
    store: any;
    context: any;

    constructor({ store }:{ store: any}) {
        super();
        this.store = store;
    }

    initialize(config: DataSourceConfig) {
        this.context = config.context;
    }

    getUsers = async () => {
        const result = await this.store.user.findMany({
            include: { projects: { include: { project: true } } },
          })
          const allUsers = result.map((user: user) => {
            return { ...user, projects: user.projects.map(assignment => assignment.project) }
          })
        return allUsers
    }
}

export default UserAPI;