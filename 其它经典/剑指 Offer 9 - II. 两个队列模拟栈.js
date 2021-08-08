/**
 * 知道下面的思路就没问题，因为leetcode上没有题就没写代码
 * 1.定义两个队列queueA，queueB
 * 2.存数据的时候，分两种情况
 *  1）queueA 和 queueB都没值，插入另一个都行
 *  2）queueA 或 queueB某个有值，往有值的那里存
 * 3.取数据的时候，假设queueA中有值，
 *  把queueA中值往queueB中push，直到queueA中剩下最后一个，return这个值就是要取的值。
 */
