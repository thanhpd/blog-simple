import { Injectable } from '@angular/core';
import { Post, PostList } from '../_models';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../_utils/utils';

const POST_KEY = 'posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post[] = [];

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
  ) { }

  private savePosts() {
    this.storageService.setItem(POST_KEY, Utils.jsonStringify(this.posts));
  }

  onGetPost() {
    if (!this.storageService.isItemExisting(POST_KEY)) {
      this.http.get('/assets/posts.json').subscribe(
        (postList: PostList) => {
          this.posts = postList.posts;
          this.savePosts();
        }
      );
      return this.posts;
    } else {
      this.posts = JSON.parse(this.storageService.getItem(POST_KEY));
      return this.posts;
    }
  }

  onEditPost(updatedPost: Post) {
    const currentPostId = this.posts.findIndex(post => post.id === updatedPost.id);
    this.posts[currentPostId] = updatedPost;
    this.posts = [...this.posts];
    this.savePosts();
  }

  onCreatePost(newPost: Post) {
    const newId = this.posts.length > 0 ? this.posts[this.posts.length - 1].id + 1 : 1;
    newPost.id = newId;

    this.posts.push(newPost);
    this.posts = [...this.posts];
    this.savePosts();
  }

  onDeletePost(postId: number) {
    this.posts = this.posts.filter(post => post.id !== postId);
    this.savePosts();
  }
}
