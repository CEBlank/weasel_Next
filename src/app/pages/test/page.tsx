//import { docClient } from 'app/utils/awsDB'
//import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export default async function Page() {
/*   const response = await docClient.send(new ScanCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME
  }));
  const comments = response.Items ?? []; */

  return (
    <>
{/*       <h1 className="title">Next.js + DynamoDB</h1>

      <div className="container">
        {comments.map(comment => (
          <div>
            <p>{comment.comment}</p>
            <div className="metadata">{comment.id}</div>
          </div>
        ))}
      </div> */}
    </>
  );
}