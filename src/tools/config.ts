import { Articles } from 'src/model/article/article.entity';
import { Classifys } from 'src/model/classify/classify.entity';
import { Comments } from 'src/model/comment/comment.entity';
import { Labels } from 'src/model/label/label.entity';
import { UserFriends } from 'src/model/user-friends/user-friends.entity';
import { Users } from 'src/model/user/user.entity';
import * as bcrypt from 'bcryptjs';

export const dbConfig = {
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
  database: 'muddyrain-blog',
  entities: [Users, Comments, UserFriends, Articles, Classifys, Labels],
  synchronize: true,
};

export const hashPass = pass => bcrypt.hashSync(pass, bcrypt.genSaltSync(10));