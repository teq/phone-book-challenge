import { Model } from 'objection';

class Phone extends Model {

    static get tableName() {
        return 'phones';
    }

}
