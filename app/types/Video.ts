// Define an enum for the actions
enum Action {
  Read = 'read',
  Update = 'update',
  Delete = 'delete'
}
// Define a type for the permissions
type Permission = `${Action}("user:${string}")`;

export type VideoType = {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $tenant: string;
  $updatedAt: string;
  creator: {
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $id: string;
    $permissions: Permission[];
    $tenant: string;
    $updatedAt: string;
    accountId: string;
    avatar: string;
    email: string;
    username: string;
  };
  prompt: string;
  thumbnail: string;
  title: string;
  video: string;
};