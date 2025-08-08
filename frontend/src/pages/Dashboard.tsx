import { BookOpen, FileText, Users } from 'react-feather';
import { useQuery } from 'react-query';

import Card from '../components/dashboard/Card';
import UpdateProfile from '../components/dashboard/UpdateProfile';
import Layout from '../components/layout';
import statsService from '../services/StatsService';

export default function Dashboard() {
  const { data, isLoading } = useQuery('stats', statsService.getStats);

  return (
    <Layout>
      <h1 className="font-normal text-3xl mb-5">Manage Courses</h1>
      <hr />
      <div className="mt-5 flex flex-col gap-5">
        {!isLoading ? (
          <div className="flex flex-col sm:flex-row gap-5">
            <Card text="Users" value={data.numberOfUsers} Icon={Users} />
            <Card text="Courses" value={data.numberOfCourses} Icon={BookOpen} />
            <Card
              text="Contents"
              value={data.numberOfContents}
              Icon={FileText}
            />
          </div>
        ) : null}

        <UpdateProfile />
      </div>
    </Layout>
  );
}
