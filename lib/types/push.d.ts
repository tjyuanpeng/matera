interface PushBody {
  object_kind: string
  event_name: string
  before: string
  after: string
  ref: string
  checkout_sha: string
  message: any
  user_id: number
  user_name: string
  user_username: string
  user_email: string
  user_avatar: string
  project_id: number
  project: Project
  commits: Commit[]
  total_commits_count: number
  push_options: PushOptions
  repository: Repository
}
