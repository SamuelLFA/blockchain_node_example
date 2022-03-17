import { createHash } from 'crypto';

export class StringUtil {
    
    static applySha256(input: string) {
        return createHash('sha256').update(input).digest('hex');
    }
}