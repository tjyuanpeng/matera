interface User {
  id: number
  name: string
  username: string
  avatar_url: string
  email: string
}

interface ObjectAttributes {
  attachment: any
  author_id: number
  change_position: any
  commit_id: any
  created_at: string
  discussion_id: string
  id: number
  line_code: any
  note: string
  noteable_id: number
  noteable_type: string
  original_position: any
  position: any
  project_id: number
  resolved_at: any
  resolved_by_id: any
  resolved_by_push: any
  st_diff: any
  system: boolean
  type: any
  updated_at: string
  updated_by_id: any
  description: string
  url: string
}

interface Project {
  id: number
  name: string
  description: string
  web_url: string
  avatar_url: any
  git_ssh_url: string
  git_http_url: string
  namespace: string
  visibility_level: number
  path_with_namespace: string
  default_branch: string
  ci_config_path: string
  homepage: string
  url: string
  ssh_url: string
  http_url: string
}

interface Commit {
  id: string
  message: string
  title: string
  timestamp: string
  url: string
  author: Author
  added: string[]
  modified: string[]
  removed: any[]
}

interface Author {
  name: string
  email: string
}

interface PushOptions {}

interface Repository {
  name: string
  url: string
  description: string
  homepage: string
  git_http_url: string
  git_ssh_url: string
  visibility_level: number
}

interface MergeRequest {
  assignee_id: any
  author_id: number
  created_at: string
  description: string
  head_pipeline_id: any
  id: number
  iid: number
  last_edited_at: any
  last_edited_by_id: any
  merge_commit_sha: any
  merge_error: any
  merge_params: MergeParams
  merge_status: string
  merge_user_id: any
  merge_when_pipeline_succeeds: boolean
  milestone_id: any
  source_branch: string
  source_project_id: number
  state_id: number
  target_branch: string
  target_project_id: number
  time_estimate: number
  title: string
  updated_at: string
  updated_by_id: any
  url: string
  source: Source
  target: Target
  last_commit: LastCommit
  work_in_progress: boolean
  total_time_spent: number
  time_change: number
  human_total_time_spent: any
  human_time_change: any
  human_time_estimate: any
  assignee_ids: any[]
  state: string
}

interface MergeParams {
  force_remove_source_branch: string
}

interface Source {
  id: number
  name: string
  description: string
  web_url: string
  avatar_url: any
  git_ssh_url: string
  git_http_url: string
  namespace: string
  visibility_level: number
  path_with_namespace: string
  default_branch: string
  ci_config_path: string
  homepage: string
  url: string
  ssh_url: string
  http_url: string
}

interface Target {
  id: number
  name: string
  description: string
  web_url: string
  avatar_url: any
  git_ssh_url: string
  git_http_url: string
  namespace: string
  visibility_level: number
  path_with_namespace: string
  default_branch: string
  ci_config_path: string
  homepage: string
  url: string
  ssh_url: string
  http_url: string
}

interface LastCommit {
  id: string
  message: string
  title: string
  timestamp: string
  url: string
  author: Author
}

interface StateId {
  previous: number
  current: number
}

interface UpdatedAt {
  previous: string
  current: string
}

interface Changes {
  state_id: StateId
  updated_at: UpdatedAt
}

// bodies

interface NoteBody {
  object_kind: string
  event_type: string
  user: User
  project_id: number
  project: Project
  object_attributes: ObjectAttributes
  repository: Repository
  merge_request: MergeRequest
}

interface MergeRequestBody {
  object_kind: string
  event_type: string
  user: User
  project: Project
  object_attributes: ObjectAttributes
  labels: any[]
  changes: Changes
  repository: Repository
}
