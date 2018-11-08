import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { Post } from '../../_models';
import { MatDialog } from '@angular/material';
import { PostManageComponent } from '../post-manage/post-manage.component';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  displayedColumns = ['id', 'title', 'author', 'url', 'publishTime', 'tags', 'content', 'actions'];

  constructor(
    public postService: PostService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.onGetPost();
  }

  viewPost(post: Post) {
    this.dialog.open(PostManageComponent, {
      data: {
        post,
        isUpdate: false
      }
    });
  }

  createPost() {
    this.dialog.open(PostManageComponent);
  }

  updatePost(post: Post) {
    this.dialog.open(PostManageComponent, {
      data: {
        post,
        isUpdate: true
      }
    });
  }

  deletePost(postId: number) {
    this.postService.onDeletePost(postId);
  }

}
